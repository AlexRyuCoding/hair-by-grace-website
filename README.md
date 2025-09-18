# Hair by Grace - Professional Hair Salon Website

A modern, responsive website for Hair by Grace, a professional hair salon in Los Angeles specializing in cuts, coloring, extensions, and styling. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## About Hair by Grace

Grace is an experienced hairstylist with over 30 years of expertise, bringing international training from Korea, Japan, UK, and USA. She specializes in:

- **Hair Coloring**: Ombre/Balayage, highlights, fashion colors, magic straight
- **Hair Treatments**: Digital perm, keratin treatment, hair BB cream, deep treatments
- **Hair Extensions**: Glue extensions, keratin extensions, braid extensions (all human hair starting at $200+)
- **Styling Services**: Haircuts, blow dry, wedding hair & makeup, updo styling, head spa
- **International Expertise**: Asian, European, and American styling techniques

## Features

- 🎨 Modern, responsive design with beautiful UI components
- 📱 Mobile-first approach with Tailwind CSS
- 📋 Contact form with validation using React Hook Form and Zod
- 🖼️ Photo gallery showcasing Grace's work
- 🎯 SEO-optimized with Next.js App Router
- ⚡ Fast performance with Next.js 15 and React 19
- 🔧 TypeScript for type safety
- 🎨 Custom UI components built with Radix UI

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: GeneralSans (custom font)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hair-by-grace-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── contact-form.tsx  # Contact form component
│   ├── footer.tsx        # Footer component
│   ├── gallery.tsx       # Photo gallery component
│   ├── header.tsx        # Header component
│   └── section.tsx       # Section wrapper component
└── lib/                  # Utility functions
    ├── utils.ts          # Utility functions
    └── validators.ts     # Form validation schemas
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contact Information

- **Phone**: (213) 369-1782 (please text instead of calling)
- **Location**: 300 S Hobart Blvd., Suite 102, Los Angeles, CA 90020
- **Hours**: Monday-Wednesday: 10:00 AM - 8:00 PM, Thursday-Sunday: Please call for hours

## Deployment

The website is optimized for deployment on Vercel:

1. Push your code to a Git repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

For other deployment platforms, run `npm run build` and deploy the `.next` folder.

## Contributing

This is a client project for Hair by Grace salon. For any updates or modifications, please contact the development team.

## License

Private project for Hair by Grace salon.
