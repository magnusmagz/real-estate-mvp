import { NextRequest, NextResponse } from "next/server";
import { mockProperties } from "@/data/mock-properties";
import { PropertySearchParams, PropertyType, PropertyStatus } from "@/types/property";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Parse query parameters
    const params: PropertySearchParams = {
      city: searchParams.get("city") || undefined,
      state: searchParams.get("state") || undefined,
      minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
      maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
      bedrooms: searchParams.get("bedrooms") ? Number(searchParams.get("bedrooms")) : undefined,
      bathrooms: searchParams.get("bathrooms") ? Number(searchParams.get("bathrooms")) : undefined,
      propertyType: searchParams.get("propertyType") as PropertyType || undefined,
      status: searchParams.get("status") as PropertyStatus || "ACTIVE",
      search: searchParams.get("search") || undefined,
      page: Number(searchParams.get("page")) || 1,
      limit: Number(searchParams.get("limit")) || 12,
      sort: searchParams.get("sort") as PropertySearchParams["sort"] || "newest",
    };

    // Filter properties based on params
    let filteredProperties = [...mockProperties];

    if (params.status) {
      filteredProperties = filteredProperties.filter(p => p.status === params.status);
    }
    if (params.city) {
      filteredProperties = filteredProperties.filter(p => 
        p.city.toLowerCase().includes(params.city!.toLowerCase())
      );
    }
    if (params.state) {
      filteredProperties = filteredProperties.filter(p => 
        p.state.toLowerCase().includes(params.state!.toLowerCase())
      );
    }
    if (params.propertyType) {
      filteredProperties = filteredProperties.filter(p => p.propertyType === params.propertyType);
    }
    if (params.bedrooms) {
      filteredProperties = filteredProperties.filter(p => p.bedrooms >= params.bedrooms!);
    }
    if (params.bathrooms) {
      filteredProperties = filteredProperties.filter(p => p.bathrooms >= params.bathrooms!);
    }
    if (params.minPrice) {
      filteredProperties = filteredProperties.filter(p => p.price >= params.minPrice!);
    }
    if (params.maxPrice) {
      filteredProperties = filteredProperties.filter(p => p.price <= params.maxPrice!);
    }
    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filteredProperties = filteredProperties.filter(p => 
        p.title.toLowerCase().includes(searchLower) ||
        p.address.toLowerCase().includes(searchLower) ||
        p.city.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }

    // Sort properties
    switch (params.sort) {
      case "price-asc":
        filteredProperties.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProperties.sort((a, b) => b.price - a.price);
        break;
      case "oldest":
        filteredProperties.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        break;
      case "newest":
      default:
        filteredProperties.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        break;
    }

    // Paginate
    const page = params.page || 1;
    const limit = params.limit || 12;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

    const total = filteredProperties.length;
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      properties: paginatedProperties,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}