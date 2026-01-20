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

## 📁 Project Structure

```
studyQ/
├── .github/workflows/     # GitHub Actions deployment
├── frontend/              # Main application
│   ├── app/
│   │   ├── components/    # React components
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Shared components
│   ├── constants/         # App constants
│   ├── hooks/            # Custom React hooks
│   └── public/           # Static assets
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

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
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
- Installs dependencies in the `frontend` directory
- Builds the static site with `next build`
- Deploys to GitHub Pages
- Site available at: `https://<username>.github.io/<repository-name>`

### Manual Deployment

For other platforms, build the static site:

```bash
cd frontend
npm run build
```

The static files will be generated in the `frontend/out` directory.

### Vercel Deployment

Deploy easily on [Vercel](https://vercel.com/new):

1. Connect your GitHub repository
2. Set the root directory to `frontend`
3. Deploy with default settings

## 🔧 Configuration

- **Next.js Config**: `frontend/next.config.ts` - Configured for static export
- **TypeScript**: `frontend/tsconfig.json`
- **Tailwind CSS**: `frontend/postcss.config.mjs`
- **ESLint**: `frontend/eslint.config.mjs`

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes in the `frontend` directory
4. Test your changes locally
5. Submit a pull request

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://framer.com/motion)
