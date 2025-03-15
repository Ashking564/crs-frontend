# Learning Management System

A modern web application for online learning and course management built with React and TypeScript.

## Features

- **User Authentication**: Secure login and registration system
- **Protected Routes**: Access control for authenticated users
- **Responsive Design**: Works on desktop and mobile devices
- **Dashboard**: Personalized user dashboard with course information

## Tech Stack

- React
- TypeScript
- React Router for navigation
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd crs-frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── auth/         # Authentication components
│   └── layout/       # Layout components
├── context/          # React Context for state management
├── pages/            # Page components
├── services/         # API services
└── types/            # TypeScript type definitions
```

## Authentication

The application uses a token-based authentication system. For development purposes, you can use the following credentials:

- Email: test@example.com
- Password: password

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm build`: Builds the app for production
- `npm eject`: Ejects from Create React App

## License

This project is licensed under the MIT License - see the LICENSE file for details.
