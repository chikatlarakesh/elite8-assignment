# Rakesh's Portfolio Website

A modern, interactive portfolio website built with React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Live Demo

[View Live Site](https://wonderful-taffy-ffe98d.netlify.app)

## Features

- Multi-page navigation with smooth page transitions
- Interactive components with animations
- Responsive design for all device sizes
- Project showcase with filtering capability
- Contact form with validation
- Interactive timeline and skills visualization
- Type animations and scroll-based reveals
- Optimized performance with code splitting and lazy loading

## Tech Stack

- **Frontend**: React with TypeScript
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/chikatlarakesh/elite8-assignment.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── common/       # Shared components
│   ├── home/         # Home page components
│   ├── Layout.tsx    # Main layout wrapper
│   ├── Navbar.tsx    # Navigation component
│   └── Footer.tsx    # Footer component
├── data/             # Data files for projects, experience, etc.
├── pages/            # Page components
│   ├── Home.tsx      # Home page
│   ├── Projects.tsx  # Projects page
│   ├── About.tsx     # About page
│   └── Contact.tsx   # Contact page
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## Deployment

The site is deployed on Netlify. To deploy your own version:

1. Fork this repository
2. Sign up or log in to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub and select the repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## License

MIT
