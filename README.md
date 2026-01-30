# studyQ

A modern educational platform landing page built with Next.js, featuring a comprehensive study solution for students and teachers.

## 🚀 Features

- **Responsive Design**: Fully responsive landing page optimized for all devices
- **Modern UI Components**: Built with React components and Tailwind CSS
- **Interactive Elements**: Smooth animations powered by Framer Motion
- **Educational Focus**: Dedicated sections for students and teachers
- **Static Site Generation**: Optimized for performance and SEO

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.1.2](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion 12.26.2](https://framer.com/motion)
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: GitHub Pages with automated CI/CD

## ⚙️ Environment Configuration

This project uses environment-aware base paths for seamless deployment across different platforms.

### Local Development

The `.env.local` file is already configured for local development:

```bash
NEXT_PUBLIC_BASE_PATH=
```

Just run:
```bash
npm run dev
```

### GitHub Pages Deployment

The environment variable is configured in `.github/workflows/nextjs.yml`:

```yaml
- name: Build with Next.js
  env:
    NEXT_PUBLIC_BASE_PATH: /studyQ
  run: npm run build
```

**To deploy to a different repository**, update the workflow file:
1. Open `.github/workflows/nextjs.yml`
2. Change `/studyQ` to `/your-repo-name`
3. Commit and push

### Other Deployment Platforms

**Vercel / Netlify / Other:**
1. Add environment variable in your platform's dashboard
2. Key: `NEXT_PUBLIC_BASE_PATH`
3. Value: Leave empty for root domain or `/subdirectory` for subpath

**Note:** Never commit `.env` files to Git. They're already in `.gitignore`.

## 📁 Project Structure

```
studyQ/
├── .github/workflows/     # GitHub Actions deployment
├── app/
│   ├── components/        # React components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/                   # Utility functions
├── public/                # Static assets
└── README.md
```

## 🏗️ Page Components

The landing page includes the following sections:
- **TopNavigation**: Header with navigation menu
- **Hero**: Main hero section with call-to-action
- **WhyStudyQ**: Value proposition section
- **Solution**: Problem-solution overview
- **Features**: Key features showcase
- **BuiltFor**: Target audience sections
- **HowItWorks**: Process explanation
- **Pricing**: Pricing plans
- **Trust_Credible**: Social proof and testimonials
- **CTA**: Call-to-action section
- **Footer**: Site footer with links

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd studyQ
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## 🚀 Deployment

### GitHub Pages (Automated)

This project is configured for automatic deployment to GitHub Pages:

1. Push your code to the `main` branch
2. Go to repository Settings > Pages
3. Set Source to "GitHub Actions"
4. The site deploys automatically on every push to main

The deployment workflow:
- Installs dependencies
- Builds the static site with `next build`
- Deploys to GitHub Pages
- Site available at: `https://<username>.github.io/<repository-name>`

### Manual Deployment

For other platforms, build the static site:

```bash
npm run build
```

The static files will be generated in the `out` directory.

### Vercel Deployment

Deploy easily on [Vercel](https://vercel.com/new):

1. Connect your GitHub repository
2. Deploy with default settings (Vercel auto-detects Next.js)
3. Add `NEXT_PUBLIC_BASE_PATH` environment variable if needed (leave empty for root domain)

## 🔧 Configuration

- **Next.js Config**: `next.config.ts` - Configured for static export with environment-aware base paths
- **TypeScript**: `tsconfig.json`
- **Tailwind CSS**: `postcss.config.mjs`
- **ESLint**: `eslint.config.mjs`
- **Environment Variables**: `.env.local` (development), `.env.production.example` (production template)

### How the Base Path System Works

This project uses a smart environment-based asset path system:

1. **Environment Variable**: `NEXT_PUBLIC_BASE_PATH` controls the base path for all assets
2. **Helper Function**: `getAssetPath()` in `lib/basePath.ts` automatically prefixes asset paths
3. **Next.js Config**: Reads the environment variable and applies it to routing and static assets

**Benefits:**
- ✅ No code changes needed when switching between environments
- ✅ Works seamlessly on GitHub Pages, Vercel, Netlify, or custom domains
- ✅ All images and assets automatically use the correct path
- ✅ Single codebase for local development and production

**Usage in components:**
```tsx
import { getAssetPath } from '@/lib/basePath';

<Image src={getAssetPath('/hero-image.png')} alt="Hero" />
```

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes locally with `npm run dev`
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://framer.com/motion)
