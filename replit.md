# ArsenalCache CRM Pro

## Overview

ArsenalCache CRM Pro is a self-hosted, multi-channel customer relationship management system designed for businesses seeking complete control over their customer communications. The application provides a comprehensive platform for managing customer interactions across multiple channels (WhatsApp, Instagram, Facebook, Telegram, email) with built-in ticketing, automation, and AI integration capabilities. The system operates as a white-label solution, allowing businesses to brand and resell the platform through a SAAS model.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend built with Vite and TypeScript. The UI is constructed using shadcn/ui components with Radix UI primitives, providing a consistent and accessible design system. The frontend employs:

- **Component-based architecture** with reusable UI components
- **TanStack Query** for server state management and API communication
- **Wouter** for lightweight client-side routing
- **Tailwind CSS** with CSS variables for theming and responsive design
- **Form handling** with React Hook Form and Zod validation

The frontend is organized into distinct sections (Hero, Features, Testimonials, Contact, etc.) that compose the main landing page, demonstrating a modular approach to UI development.

### Backend Architecture
The backend follows a clean Express.js architecture with TypeScript, implementing:

- **Express.js server** with middleware for logging, JSON parsing, and error handling
- **Modular routing system** separating API endpoints from server configuration
- **Storage abstraction layer** with an interface-based approach allowing for different storage implementations
- **In-memory storage** for development with plans for database integration
- **Zod schemas** for request validation and type safety

The server implements a contact form submission system as the primary business logic, demonstrating the application's lead capture capabilities.

### Database Design
The system uses Drizzle ORM with PostgreSQL for data persistence. The schema defines:

- **Users table** for authentication and access control
- **Contact submissions table** for lead management and customer inquiries
- **UUID-based primary keys** for better distributed system compatibility
- **Timestamp tracking** for audit trails and data management

The database configuration supports both development and production environments through environment variables.

### Development Environment
The project uses a modern development stack with:

- **Vite** for fast development builds and hot module replacement
- **TypeScript** throughout the entire stack for type safety
- **Shared schema definitions** between frontend and backend to ensure consistency
- **Environment-specific configurations** for different deployment targets

### UI/UX Design System
The application implements a comprehensive design system featuring:

- **Consistent color scheme** with CSS custom properties for easy theming
- **Responsive design** with mobile-first approach
- **Accessibility-compliant components** using Radix UI primitives
- **Animation and interaction patterns** for enhanced user experience
- **Portuguese language interface** targeting Brazilian market

## External Dependencies

### Core Framework Dependencies
- **React 18+** for frontend UI development
- **Express.js** for backend API server
- **TypeScript** for type safety across the entire stack
- **Vite** for build tooling and development server

### Database and ORM
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** as the primary database (configured for Neon Database)
- **Drizzle-kit** for database migrations and schema management

### UI Components and Styling
- **Radix UI** for accessible, unstyled UI primitives
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built component patterns
- **Lucide React** for consistent iconography

### State Management and Data Fetching
- **TanStack Query** for server state management and caching
- **React Hook Form** for form state management
- **Zod** for runtime type validation and schema definition

### Development and Build Tools
- **ESBuild** for fast production builds
- **TSX** for TypeScript execution in development
- **PostCSS** with Autoprefixer for CSS processing

### Hosting and Deployment
- **Replit-specific plugins** for development environment integration
- **Environment variable configuration** for database connections
- **Static asset serving** through Express in production

The architecture prioritizes type safety, developer experience, and scalability while maintaining the flexibility to operate as both a standalone application and a white-label SAAS platform.