import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, MapPin, Calendar, Home, Car, ArrowLeft, Share2, Heart, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Beautiful Family Home - 1247 Maple Street, Springfield, IL | $489,000",
  description: "Stunning 3 bedroom, 2 bathroom family home with modern updates in Springfield, IL. Features updated kitchen, hardwood floors, and landscaped yard. Schedule a showing today!",
  openGraph: {
    title: "Beautiful Family Home in Springfield - $489,000",
    description: "3 bed, 2 bath family home with modern updates. 1,850 sq ft.",
    images: ["https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=630&fit=crop"],
  },
};

export default function SpringfieldMapleStreetPage() {
  const property = {
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
    status: "ACTIVE",
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
      photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    highlights: {
      school: "Lincoln Elementary - 0.3 miles",
      shopping: "Springfield Shopping Center - 0.8 miles",
      transit: "Metro Station - 0.6 miles",
      hospital: "Springfield General - 1.2 miles",
    },
    monthlyPayment: 2456,
    downPayment: 97800,
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to HomeFinder</span>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Image */}
            <div className="lg:col-span-2 relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
              <Badge className="absolute top-4 left-4 text-lg px-4 py-1">
                {property.status}
              </Badge>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <p className="text-2xl font-bold">{formatPrice(property.price)}</p>
              </div>
            </div>
            
            {/* Side Images */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {property.images.slice(1, 3).map((image, index) => (
                <div key={index} className="relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src={image}
                    alt={`${property.title} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <Button className="h-full min-h-[100px] lg:min-h-0" variant="outline">
                View All {property.images.length} Photos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Info */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Address */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
              <p className="text-xl text-muted-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {property.address}, {property.city}, {property.state} {property.zipCode}
              </p>
            </div>

            {/* Key Features */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Bed className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                  </div>
                  <div className="text-center">
                    <Square className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">{property.squareFeet.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Sq Ft</p>
                  </div>
                  <div className="text-center">
                    <Home className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">{property.lotSize}</p>
                    <p className="text-sm text-muted-foreground">Acres</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Home</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {property.description}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Home Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Neighborhood Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Neighborhood Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🏫</span>
                    </div>
                    <div>
                      <p className="font-medium">Top-Rated Schools</p>
                      <p className="text-sm text-muted-foreground">{property.highlights.school}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🛒</span>
                    </div>
                    <div>
                      <p className="font-medium">Shopping</p>
                      <p className="text-sm text-muted-foreground">{property.highlights.shopping}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🚊</span>
                    </div>
                    <div>
                      <p className="font-medium">Public Transit</p>
                      <p className="text-sm text-muted-foreground">{property.highlights.transit}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🏥</span>
                    </div>
                    <div>
                      <p className="font-medium">Healthcare</p>
                      <p className="text-sm text-muted-foreground">{property.highlights.hospital}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-primary">{formatPrice(property.price)}</p>
                  <p className="text-muted-foreground">{property.propertyType}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Est. Monthly Payment</span>
                    <span className="font-semibold">${property.monthlyPayment.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Down Payment (20%)</span>
                    <span className="font-semibold">{formatPrice(property.downPayment)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    Schedule Showing
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Get Pre-Approved
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agent Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={property.agent.photoUrl}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{property.agent.name}</h3>
                    <p className="text-sm text-muted-foreground">{property.agent.title}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href={`tel:${property.agent.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      {property.agent.phone}
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href={`mailto:${property.agent.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email Agent
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask a Question
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Year Built
                    </span>
                    <span className="font-medium">{property.yearBuilt}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Car className="h-4 w-4" />
                      Garage
                    </span>
                    <span className="font-medium">2 Car Attached</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      Style
                    </span>
                    <span className="font-medium">Modern</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/5 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Make This Your Home?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don&apos;t miss out on this beautiful property. Schedule a showing today and see why this could be your perfect home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Schedule In-Person Tour
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Request Video Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}