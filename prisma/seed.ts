import { PrismaClient, PropertyType, PropertyStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create agents
  const agents = await Promise.all([
    prisma.agent.create({
      data: {
        name: "Sarah Mitchell",
        email: "sarah.mitchell@homefinder.com",
        phone: "(555) 123-4567",
        bio: "With over 10 years of experience in the Springfield real estate market, Sarah is dedicated to helping families find their perfect home.",
        photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        licenseNumber: "IL-RE-2023-001",
        yearsExperience: 10,
        totalSales: 150,
        avgRating: 4.9,
        reviewCount: 127,
      },
    }),
    prisma.agent.create({
      data: {
        name: "Michael Chen",
        email: "michael.chen@homefinder.com",
        phone: "(555) 234-5678",
        bio: "Specializing in luxury properties and investment opportunities, Michael brings a wealth of market knowledge to every transaction.",
        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        licenseNumber: "IL-RE-2023-002",
        yearsExperience: 8,
        totalSales: 120,
        avgRating: 4.8,
        reviewCount: 98,
      },
    }),
    prisma.agent.create({
      data: {
        name: "Emily Rodriguez",
        email: "emily.rodriguez@homefinder.com",
        phone: "(555) 345-6789",
        bio: "First-time home buyers love working with Emily for her patience, expertise, and commitment to finding the perfect starter home.",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        licenseNumber: "IL-RE-2023-003",
        yearsExperience: 5,
        totalSales: 75,
        avgRating: 4.9,
        reviewCount: 65,
      },
    }),
  ]);

  // Create properties with images
  const propertyData = [
    {
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
      propertyType: PropertyType.HOUSE,
      status: PropertyStatus.ACTIVE,
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
      slug: "beautiful-family-home-maple-street",
      metaTitle: "Beautiful Family Home in Springfield - 3 Bed, 2 Bath",
      metaDescription: "Stunning 3 bedroom, 2 bathroom family home with modern updates in Springfield, IL. Features updated kitchen, hardwood floors, and landscaped yard.",
      agentId: agents[0].id,
      images: [
        { url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop", isPrimary: true },
        { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop" },
        { url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop" },
        { url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop" },
      ],
    },
    {
      title: "Luxury Downtown Condo with City Views",
      address: "500 Lake Shore Drive",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      price: 750000,
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1200,
      yearBuilt: 2020,
      propertyType: PropertyType.CONDO,
      status: PropertyStatus.ACTIVE,
      description: "Experience urban living at its finest in this luxury downtown condo. Floor-to-ceiling windows offer breathtaking city views, while the open floor plan creates a seamless flow perfect for entertaining. The modern kitchen features top-of-the-line appliances and sleek finishes.",
      features: ["City Views", "Concierge Service", "Gym", "Rooftop Deck", "In-Unit Laundry"],
      slug: "luxury-downtown-condo-chicago",
      metaTitle: "Luxury Downtown Chicago Condo - 2 Bed, 2 Bath with City Views",
      metaDescription: "Stunning luxury condo in downtown Chicago with panoramic city views. Features modern kitchen, concierge service, and rooftop deck.",
      agentId: agents[1].id,
      images: [
        { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop", isPrimary: true },
        { url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1200&h=800&fit=crop" },
      ],
    },
    {
      title: "Charming Townhouse in Historic District",
      address: "789 Oak Avenue",
      city: "Evanston",
      state: "IL",
      zipCode: "60201",
      price: 425000,
      bedrooms: 3,
      bathrooms: 2.5,
      squareFeet: 1600,
      yearBuilt: 1925,
      propertyType: PropertyType.TOWNHOUSE,
      status: PropertyStatus.PENDING,
      description: "Step back in time with this charming townhouse in Evanston's historic district. Original hardwood floors and architectural details blend seamlessly with modern updates. The renovated kitchen maintains period charm while offering contemporary functionality.",
      features: ["Historic Charm", "Original Hardwood", "Updated Kitchen", "Private Patio", "Walk to Downtown"],
      slug: "charming-townhouse-evanston",
      metaTitle: "Charming Historic Townhouse in Evanston - 3 Bed, 2.5 Bath",
      metaDescription: "Beautiful historic townhouse in Evanston with original details and modern updates. Features renovated kitchen and private patio.",
      agentId: agents[2].id,
      images: [
        { url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop", isPrimary: true },
        { url: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=1200&h=800&fit=crop" },
      ],
    },
    {
      title: "Modern Ranch Style Home",
      address: "321 Pine Road",
      city: "Naperville",
      state: "IL",
      zipCode: "60540",
      price: 525000,
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2200,
      lotSize: 0.5,
      yearBuilt: 2019,
      propertyType: PropertyType.HOUSE,
      status: PropertyStatus.ACTIVE,
      description: "This modern ranch-style home offers single-level living at its best. The open floor plan features vaulted ceilings and large windows that flood the space with natural light. The master suite includes a spa-like bathroom and walk-in closet.",
      features: ["Single Level", "Vaulted Ceilings", "3-Car Garage", "Smart Home", "Energy Star Certified"],
      slug: "modern-ranch-home-naperville",
      metaTitle: "Modern Ranch Home in Naperville - 4 Bed, 3 Bath",
      metaDescription: "Spacious modern ranch home in Naperville with open floor plan and smart home features. Single-level living with 3-car garage.",
      agentId: agents[0].id,
      images: [
        { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop", isPrimary: true },
      ],
    },
    {
      title: "Cozy Studio Apartment in the Loop",
      address: "100 Michigan Avenue",
      city: "Chicago",
      state: "IL",
      zipCode: "60602",
      price: 285000,
      bedrooms: 1,
      bathrooms: 1,
      squareFeet: 650,
      yearBuilt: 2015,
      propertyType: PropertyType.CONDO,
      status: PropertyStatus.ACTIVE,
      description: "Perfect for urban professionals, this efficiently designed studio maximizes every square foot. The modern kitchen features stainless steel appliances and granite countertops. Building amenities include a fitness center and rooftop terrace.",
      features: ["Downtown Location", "Fitness Center", "Rooftop Terrace", "Pet Friendly", "24/7 Security"],
      slug: "cozy-studio-apartment-chicago-loop",
      metaTitle: "Cozy Studio Apartment in Chicago Loop - Downtown Living",
      metaDescription: "Efficient studio apartment in the heart of Chicago's Loop. Features modern kitchen, building amenities, and prime downtown location.",
      agentId: agents[1].id,
      images: [
        { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop", isPrimary: true },
      ],
    },
    {
      title: "Suburban Dream Home with Pool",
      address: "456 Elm Street",
      city: "Oak Park",
      state: "IL",
      zipCode: "60301",
      price: 675000,
      bedrooms: 5,
      bathrooms: 3.5,
      squareFeet: 3200,
      lotSize: 0.75,
      yearBuilt: 2016,
      propertyType: PropertyType.HOUSE,
      status: PropertyStatus.SOLD,
      description: "This exceptional family home sits on a large lot with a sparkling pool and outdoor kitchen. The gourmet kitchen opens to a family room with fireplace. Five bedrooms provide plenty of space, including a first-floor guest suite.",
      features: ["Swimming Pool", "Outdoor Kitchen", "Guest Suite", "Three-Car Garage", "Home Theater"],
      slug: "suburban-dream-home-oak-park",
      metaTitle: "Suburban Dream Home in Oak Park - 5 Bed, 3.5 Bath with Pool",
      metaDescription: "Luxurious family home in Oak Park featuring swimming pool, outdoor kitchen, and home theater. Five bedrooms on large lot.",
      agentId: agents[2].id,
      images: [
        { url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=800&fit=crop", isPrimary: true },
      ],
    },
  ];

  // Create properties with their images
  for (const data of propertyData) {
    const { images, ...propertyInfo } = data;
    
    const property = await prisma.property.create({
      data: {
        ...propertyInfo,
        publishedAt: new Date(),
      },
    });

    // Create images for each property
    await Promise.all(
      images.map((image, index) =>
        prisma.propertyImage.create({
          data: {
            propertyId: property.id,
            url: image.url,
            publicId: `property-${property.id}-${index}`,
            isPrimary: image.isPrimary || false,
            order: index,
          },
        })
      )
    );
  }

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });