

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

## Screenshots

Here's a preview of the Hackathon Web Application:

![Screenshot (359)](https://github.com/user-attachments/assets/7ea06f16-2afb-4973-9c56-57a325ceda32)
![Screenshot (360)](https://github.com/user-attachments/assets/b90a5e21-66fd-4e3e-83be-d3c1a9e522f1)
![Screenshot (361)](https://github.com/user-attachments/assets/b4737ab9-f514-48fa-8892-8c6b80295c3b)
![Screenshot (362)](https://github.com/user-attachments/assets/f0cbc933-44da-41d2-a24c-740a469092d0)
![Screenshot (363)](https://github.com/user-attachments/assets/c852d7b5-3b73-4722-b583-2c4b2c0e2443)
![Screenshot (364)](https://github.com/user-attachments/assets/ec97a56b-58d9-4605-94a3-f5780718fda2)
![Screenshot (365)](https://github.com/user-attachments/assets/75f99cfe-3ab4-40d5-9739-ce96ababa036)
![Screenshot (366)](https://github.com/user-attachments/assets/0472d860-a8c0-461c-80a8-bba3cd86af0b)


## Deployment

This application can be easily deployed using Vercel. Run the following command to deploy:
```bash
vercel
```

## License

This project is licensed under the MIT License.
