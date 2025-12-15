# MelodyEarGym_Web

Website for Melody Ear Gym iOS app - Support and marketing page.

## Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

## Getting Started

### Installation

Install the project dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

This will start the development server and open the app in your browser at `http://localhost:3000`. The page will automatically reload if you make changes to the code.

### Building for Production

Build the app for production:

```bash
npm run build
```

This creates an optimized production build in the `build` folder. The build is minified and ready to be deployed.

The `build` folder contains:
- `index.html` - Main HTML file
- `static/` - Compiled CSS and JavaScript files
- Other static assets

You can serve the production build using any static file server or deploy it to your hosting service.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)