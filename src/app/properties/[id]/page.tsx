import Image from "next/image";
import { notFound } from "next/navigation";
import { Bed, Bath, Square, MapPin, Calendar, Home, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data - will be replaced with API calls
const getProperty = (id: string) => {
  const properties = {
    "1": {
      id: "1",
      title: "Beautiful Family Home with Modern Updates",
      address: "1247 Maple Street",
      city: "Springfield",
      state: "IL",
      zipCode: "62701",
      price: 489000,
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 1850,
      lotSize: 0.25,
      yearBuilt: 2018,
      propertyType: "Single Family Home",
      status: "ACTIVE" as const,
      description: `This stunning family home offers the perfect blend of modern convenience and comfortable living. Recently updated throughout, the property features an open-concept floor plan that seamlessly connects the living, dining, and kitchen areas - ideal for both daily life and entertaining.

The gourmet kitchen boasts stainless steel appliances, granite countertops, and a large island with breakfast bar seating. The spacious master suite includes a walk-in closet and ensuite bathroom with dual vanities. Two additional bedrooms and a full bathroom complete the upstairs layout.

Outside, you'll find a beautifully landscaped yard with mature trees, a deck perfect for outdoor dining, and a two-car attached garage. Located in the desirable Maple Street neighborhood, this home is within walking distance of top-rated schools and parks.`,
      features: [
        "Updated Kitchen",
        "Hardwood Floors",
        "Central Air/Heat",
        "Stainless Appliances",
        "Granite Countertops",
        "Walk-in Closets",
        "Deck/Patio",
        "Landscaped Yard",
        "Attached Garage",
        "Energy Efficient",
      ],
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop",
      ],
      agent: {
        name: "Sarah Mitchell",
        title: "Senior Real Estate Agent",
        phone: "(555) 123-4567",
        email: "sarah@homefinder.com",
      },
    },
  };

  return properties[id as keyof typeof properties] || null;
};

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getProperty(id);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="container px-4 py-8">
      {/* Property Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">{property.title}</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {property.address}, {property.city}, {property.state} {property.zipCode}
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">{formatPrice(property.price)}</p>
            <p className="text-muted-foreground">${Math.round(property.price / property.squareFeet)}/sq ft</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
              <Badge className="absolute top-4 left-4">
                {property.status}
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {property.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${property.title} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Square className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{property.squareFeet.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Sq Ft</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{property.lotSize}</p>
                    <p className="text-sm text-muted-foreground">Acres</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{property.yearBuilt}</p>
                    <p className="text-sm text-muted-foreground">Year Built</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">2</p>
                    <p className="text-sm text-muted-foreground">Garage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line">{property.description}</p>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Home Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Agent */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Agent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold">{property.agent.name}</p>
                <p className="text-sm text-muted-foreground">{property.agent.title}</p>
              </div>
              <div className="space-y-2">
                <Button className="w-full" size="lg">
                  Schedule Showing
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Ask a Question
                </Button>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>{property.agent.phone}</p>
                <p>{property.agent.email}</p>
              </div>
            </CardContent>
          </Card>

          {/* Mortgage Calculator */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold">$2,456</p>
                  <p className="text-sm text-muted-foreground">Estimated monthly payment</p>
                </div>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Down Payment (20%)</span>
                    <span>{formatPrice(property.price * 0.2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span>6.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Term</span>
                    <span>30 years</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Calculate Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}