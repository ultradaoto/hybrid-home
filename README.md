# MyUltra.Coach - Hybrid Home

Welcome to the homepage for MyUltra.Coach! This is a Node.js application built with TypeScript, Express, and EJS templating.

## Features

- 🚀 Built with TypeScript for type safety
- 🎨 Modern, responsive design with CSS Grid and Flexbox
- 🔒 Security middleware with Helmet and CORS
- 📱 Mobile-first responsive design
- ⚡ Fast development with hot reload
- 🎯 MVC architecture pattern

## Project Structure

```
hybrid-home/
├── src/
│   ├── app.ts                 # Main application file
│   ├── controllers/           # Route controllers
│   │   └── homeController.ts
│   └── routes/               # Route definitions
│       └── homeRoutes.ts
├── views/                    # EJS templates
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   └── about.ejs
├── public/                   # Static assets
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── dist/                     # Compiled TypeScript (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the TypeScript code:**
   ```bash
   npm run build
   ```

3. **Start the application:**
   ```bash
   npm start
   ```

4. **For development (with hot reload):**
   ```bash
   npm run dev
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start the production server
- `npm run dev` - Start development server with hot reload
- `npm run clean` - Remove compiled files

## Navigation

The application includes:
- **Home** - Main landing page with hero section and features
- **About** - Information about MyUltra.Coach
- **Login** - Links to rooms.myultra.coach

## Technologies Used

- **Node.js** - Runtime environment
- **TypeScript** - Type-safe JavaScript
- **Express.js** - Web framework
- **EJS** - Templating engine
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## Development

This project uses TypeScript with strict type checking enabled. The source code is in the `src/` directory and gets compiled to the `dist/` directory.

For development, use `npm run dev` which will:
- Watch for TypeScript changes and recompile
- Restart the server automatically when files change

## Deployment

1. Build the project: `npm run build`
2. Start the server: `npm start`
3. The application will be available on the configured port (default: 3000)

## License

This project is licensed under the ISC License. 