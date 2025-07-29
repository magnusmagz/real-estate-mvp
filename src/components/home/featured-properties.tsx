import { PropertyCard } from "@/components/property/property-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Mock data for now - will be replaced with API calls
const mockProperties = [
  {
    id: "1",
    title: "Beautiful Family Home with Modern Updates",
    address: "1247 Maple Street",
    city: "Springfield",
    state: "IL",
    price: 489000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1850,
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
    status: "ACTIVE" as const,
    propertyType: "Single Family Home",
  },
  {
    id: "2",
    title: "Luxury Downtown Condo with City Views",
    address: "500 Lake Shore Drive",
    city: "Chicago",
    state: "IL",
    price: 750000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    status: "ACTIVE" as const,
    propertyType: "Condo",
  },
  {
    id: "3",
    title: "Charming Townhouse in Historic District",
    address: "789 Oak Avenue",
    city: "Evanston",
    state: "IL",
    price: 425000,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1600,
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
    status: "PENDING" as const,
    propertyType: "Townhouse",
  },
];

export function FeaturedProperties() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Properties</h2>
            <p className="text-muted-foreground mt-2">
              Discover our hand-picked selection of premium homes
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link href="/properties">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild>
            <Link href="/properties">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}