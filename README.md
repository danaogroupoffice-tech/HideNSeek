# Hide N Seek Child Care Website

A modern, responsive website for Hide N Seek Child Care built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, colorful design with animated floating shapes
- 📱 Fully responsive mobile-first design
- 📋 Contact form for waitlist signups
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

### Option 1: Auto-deploy via GitHub

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete the deployment

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   └── FloatingShapes.tsx # Animated background
├── ui/                  # UI components
├── public/              # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── vercel.json
```

## Customization

### Change Colors
Edit the Tailwind CSS classes in `app/page.tsx`

### Update Content
Modify the text and section content in `app/page.tsx`

### Update Logo
Add your logo to the `public/` folder and update the import path

## Environment Variables

If you need environment variables, create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## License

© 2026 Hide N Seek Child Care. All Rights Reserved.
