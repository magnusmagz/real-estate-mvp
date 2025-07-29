# Real Estate MVP - HomeFinder

A modern, responsive real estate listing website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏠 Browse property listings with detailed information
- 🔍 Search and filter properties by location, price, and features
- 📱 Fully responsive design for mobile and desktop
- 🚀 Fast performance with Next.js App Router
- 🎨 Modern UI with Tailwind CSS
- 📸 Image galleries for each property
- 👤 Agent profiles and contact information

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **State Management:** React Query + Zustand
- **Database:** PostgreSQL with Prisma ORM (ready for production)
- **Deployment:** Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd real-estate-mvp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project to Vercel
3. Deploy with zero configuration

The application currently uses mock data for demonstration purposes. To connect a real database:

1. Set up a PostgreSQL database (e.g., on Supabase or Neon)
2. Update the `DATABASE_URL` in your environment variables
3. Run database migrations: `npm run db:migrate`
4. Seed the database: `npm run db:seed`

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── api/         # API routes
│   └── properties/  # Property pages
├── components/      # React components
│   ├── ui/         # Base UI components
│   ├── layout/     # Layout components
│   └── property/   # Property-specific components
├── data/           # Mock data
├── hooks/          # Custom React hooks
├── lib/            # Utilities and configurations
└── types/          # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

## Future Enhancements

- [ ] User authentication and accounts
- [ ] Advanced search with maps
- [ ] Virtual property tours
- [ ] MLS integration
- [ ] Mortgage calculator
- [ ] Saved searches and favorites
- [ ] Email notifications
- [ ] Multi-language support

## License

MIT