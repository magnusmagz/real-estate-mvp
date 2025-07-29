export type PropertyStatus = "ACTIVE" | "PENDING" | "SOLD" | "OFF_MARKET";
export type PropertyType = "HOUSE" | "CONDO" | "TOWNHOUSE" | "MULTI_FAMILY" | "LAND" | "COMMERCIAL";

export interface PropertyImage {
  id: string;
  url: string;
  isPrimary: boolean;
  order: number;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio?: string;
  photoUrl?: string;
  yearsExperience?: number;
  totalSales: number;
  avgRating?: number;
  reviewCount: number;
}

export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize?: number;
  yearBuilt?: number;
  propertyType: PropertyType;
  status: PropertyStatus;
  description: string;
  features: string[];
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  agentId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PropertyWithDetails = Property & {
  images: PropertyImage[];
  agent: Agent;
};

export type PropertySearchParams = {
  city?: string;
  state?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: PropertyType;
  status?: PropertyStatus;
  search?: string;
  page?: number;
  limit?: number;
  sort?: "price-asc" | "price-desc" | "newest" | "oldest";
};