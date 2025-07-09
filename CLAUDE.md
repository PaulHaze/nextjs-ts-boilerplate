# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Next.js
- `npm run turbo` - Start development server with Turbopack (faster builds)
- `npm run build` - Build the project for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 TypeScript starter project with modern tooling and theming capabilities.

### Key Technologies
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling with custom theme system
- **next-themes** for dark/light mode switching
- **Geist fonts** (sans and mono) loaded locally

### Directory Structure
```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout with theme provider
│   └── page.tsx      # Home page
├── components/       # Reusable React components
│   └── ui/          # UI components (ThemeToggle, etc.)
├── lib/             # Utility functions and helpers
│   └── utils/       # Shared utilities (cn function for class merging)
└── styles/          # Global styles and custom CSS
    ├── main.css     # Main stylesheet with Tailwind imports
    └── custom/      # Custom component styles
```

### Path Aliases
- `@/*` maps to `./src/*`
- `~/*` maps to `./public/*`

### Theme System
- Uses `next-themes` for theme switching
- Custom CSS variables defined in `src/styles/main.css`
- Theme toggle component in `src/components/ui/ThemeToggle.tsx`
- Dark mode variant: `@variant dark (&:where([data-theme="dark"] *))`

### Styling Approach
- Tailwind CSS 4 with custom theme configuration
- Custom utilities: `bb`, `bb2`, `flex-center`
- Custom spacing and breakpoint variables
- Class merging utility `cn()` using `clsx` and `tailwind-merge`

### Code Quality Tools
- **ESLint** with Next.js, TypeScript, and React plugins
- **Prettier** with Tailwind CSS plugin for class sorting
- TypeScript strict mode enabled
- Test files ignored in ESLint config

### Key Files to Modify
- `src/app/layout.tsx:30-32` - Update metadata title and description
- `src/app/page.tsx` - Main page content
- `src/styles/main.css` - Theme variables and global styles

### Development Notes
- The project uses pnpm for package management
- Fonts are loaded locally (Geist Sans and Geist Mono)
- Custom theme toggle with animated sun/moon SVG
- ESLint configured to ignore test files and build outputs