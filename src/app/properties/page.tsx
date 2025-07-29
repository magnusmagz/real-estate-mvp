import { PropertyCard } from "@/components/property/property-card";

// Mock data - will be replaced with API calls
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
  {
    id: "4",
    title: "Modern Ranch Style Home",
    address: "321 Pine Road",
    city: "Naperville",
    state: "IL",
    price: 525000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2200,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    status: "ACTIVE" as const,
    propertyType: "Single Family Home",
  },
  {
    id: "5",
    title: "Cozy Studio Apartment",
    address: "100 Michigan Avenue",
    city: "Chicago",
    state: "IL",
    price: 285000,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 650,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    status: "ACTIVE" as const,
    propertyType: "Condo",
  },
  {
    id: "6",
    title: "Suburban Dream Home",
    address: "456 Elm Street",
    city: "Oak Park",
    state: "IL",
    price: 675000,
    bedrooms: 5,
    bathrooms: 3.5,
    squareFeet: 3200,
    imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=400&fit=crop",
    status: "SOLD" as const,
    propertyType: "Single Family Home",
  },
];

export default function PropertiesPage() {
  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">All Properties</h1>
        <p className="text-muted-foreground mt-2">
          Browse our complete collection of available homes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}