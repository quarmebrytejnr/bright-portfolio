# Portfolio Website with React and Express

## Overview

This project is a personal portfolio website for an Analytics Engineer named Bright Kwame Dogbey. It features a modern frontend built with React (using Vite), TypeScript, and Tailwind CSS with the shadcn/ui component library. The backend is a simple Express server that serves the React application and provides minimal API endpoints.

The application uses a PostgreSQL database (through Drizzle ORM) to store messages from the contact form and project information. The site showcases the portfolio owner's skills, experience, projects, and provides a way for visitors to contact them.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

The frontend is built with React and TypeScript, using Vite as the build tool. Key architectural choices include:

1. **Component Architecture**: The application follows a component-based architecture with reusable UI components from shadcn/ui.
2. **Routing**: Simple routing is handled with the wouter library, a lightweight alternative to React Router.
3. **State Management**: Local component state with React hooks for simple state needs, and React Query for data fetching and server state.
4. **Styling**: Tailwind CSS for utility-first styling with a consistent design system defined in the theme configuration.
5. **Form Handling**: React Hook Form with Zod validation for form state management and validation.

### Backend

The backend is a minimal Express server that primarily:

1. Serves the compiled React application
2. Provides a simple API for the contact form and project information
3. Handles basic server-side logging

### Database

The application uses Drizzle ORM with a PostgreSQL database. The schema includes:

1. **Messages**: Stores contact form submissions
2. **Projects**: Stores portfolio project information

## Key Components

### Frontend Components

1. **Layout Components**:
   - `Navbar`: Navigation bar with theme toggle
   - `Footer`: Site footer with quick links

2. **Page Components**:
   - `Home`: Main page component that composes all sections
   - `NotFound`: 404 error page

3. **UI Components**:
   - Extensive set of UI components from shadcn/ui (buttons, cards, forms, etc.)
   - Custom components like `ProjectCard`, `DashboardPreview`, and `Timeline`

4. **Home Section Components**:
   - `Hero`: Landing section
   - `About`: Information about the portfolio owner
   - `Skills`: Skills and expertise
   - `Experience`: Work experience
   - `Projects`: Portfolio projects showcase
   - `Dashboards`: Analytics dashboards display
   - `Contact`: Contact form

### Backend Components

1. **Server Setup**: Express server configuration in `server/index.ts`
2. **API Routes**: Route handlers in `server/routes.ts`
3. **Storage Layer**: Data access in `server/storage.ts`
4. **Vite Integration**: Server-side Vite configuration for development

## Data Flow

1. **Static Content Flow**:
   - Express server serves the compiled React application
   - React components render static portfolio information

2. **Contact Form Flow**:
   - User submits the form with their information
   - Frontend validates the data using Zod schema
   - Data is sent to the backend API
   - Backend stores the message in the database
   - Response is sent back to confirm submission

3. **Projects Display Flow**:
   - Projects data is fetched from the backend
   - Data is displayed in the Projects section using ProjectCard components
   - When a user clicks on a project, more details are shown in a modal

## External Dependencies

### Frontend Dependencies

1. **UI Framework**:
   - React with TypeScript
   - shadcn/ui components (based on Radix UI primitives)
   - Tailwind CSS for styling

2. **Form Handling**:
   - React Hook Form
   - Zod for schema validation

3. **Data Fetching**:
   - TanStack Query (React Query)

4. **Routing**:
   - wouter for lightweight routing

### Backend Dependencies

1. **Server Framework**:
   - Express.js

2. **Database**:
   - Drizzle ORM
   - PostgreSQL (via Neon's serverless Postgres)

3. **Utilities**:
   - Zod for data validation

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

1. **Development Environment**:
   - `npm run dev` starts both the Express server and the Vite development server

2. **Production Build**:
   - `npm run build` compiles both the frontend React application and the backend server
   - Frontend is built using Vite
   - Backend is bundled using esbuild

3. **Production Deployment**:
   - `npm run start` runs the production build
   - Express serves the static files from the build directory

4. **Database Setup**:
   - The application connects to a PostgreSQL database whose URL is specified in the DATABASE_URL environment variable
   - Database schema can be updated using `npm run db:push`

## Getting Started

To begin development:

1. Ensure the DATABASE_URL environment variable is set
2. Run `npm run dev` to start the development server
3. For database schema updates, use `npm run db:push`

To create a production build:
1. Run `npm run build`
2. Run `npm run start` to start the production server