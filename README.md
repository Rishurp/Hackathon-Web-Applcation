
# Hackathon Web Application

This project is a simple hackathon management dashboard for organizers. The web app allows organizers to create, edit, and delete hackathons and manage their details. Organizers can also sort, search, and filter hackathons based on different criteria such as level, status, and date. The app provides a responsive UI for managing hackathons with various features.

## Features

- **Create Hackathon**: Organizers can create new hackathons with fields such as name, description, image, level (easy, medium, hard), start date, and end date.
- **Edit & Delete Hackathons**: Hackathons can be edited or deleted after creation.
- **Sort Hackathons**: Sort hackathons by newest first or oldest first.
- **Filter Hackathons**: Filter hackathons by level (easy, medium, hard) or status (active, upcoming, past).
- **Search Hackathons**: Search hackathons by name.
- **Timers**:
  - Active hackathons show a countdown to their end.
  - Upcoming hackathons show a countdown to their start.
  - Past hackathons display both start and end dates.
- **Hackathon Details Page**: When a hackathon card is clicked, it navigates to a page showing full details of the hackathon with options to edit or delete.

## Tech Stack

- **Frontend**: React.js, Redux Toolkit for state management
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router
- **Styling**: Tailwind CSS and Emotion Styled
- **Build Tool**: Vite
- **Deployment**: Vercel

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Rishurp/Hackathon-Web-Applcation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Hackathon-Web-Application
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build the project for production:
   ```bash
   npm run build
   ```

6. Preview the production build:
   ```bash
   npm run preview
   ```

## Scripts

- `dev`: Runs the development server using Vite.
- `build`: Builds the application for production.
- `lint`: Lints the code using ESLint.
- `preview`: Previews the production build locally.

## Dependencies

- `react`: React library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `@reduxjs/toolkit`: State management library for Redux.
- `react-redux`: Official React bindings for Redux.
- `@mui/material` & `@mui/icons-material`: Material-UI components and icons for building the UI.
- `react-router-dom`: For routing and navigation between different pages.
- `tailwindcss`: Utility-first CSS framework for styling.
- `vercel`: Vercel CLI for deployment.

## Dev Dependencies

- `vite`: Frontend build tool.
- `eslint`: Linting tool for code quality.
- `eslint-plugin-react` & `eslint-plugin-react-hooks`: ESLint plugins for React.
- `@vitejs/plugin-react`: Vite plugin for React.
- `postcss` & `autoprefixer`: CSS processors.

## Deployment

This application can be easily deployed using Vercel. Run the following command to deploy:
```bash
vercel
```

## License

This project is licensed under the MIT License.

