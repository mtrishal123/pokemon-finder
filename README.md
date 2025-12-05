# Pokémon Finder

A React + TypeScript application that allows users to search and discover Pokémon using the PokéAPI. Search by name or Pokédex number to view detailed information about any Pokémon.

## Live Demo

[View Live Site] https://profound-froyo-366714.netlify.app

## Features

- 🔍 Search Pokémon by name or ID (1-1025)
- 📊 View detailed Pokémon information:
  - Official sprite artwork
  - Types with color coding
  - Height and weight measurements
  - Complete abilities list
- 🎯 Quick search buttons for popular Pokémon
- 📱 Responsive design for mobile and desktop
- ♿ Semantic HTML with accessibility features
- 🎨 Modern, clean UI with gradient background
- ⚡ Fast performance with Vite
- 🔒 Type-safe with TypeScript

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **PokéAPI** - Free Pokémon data API (no authentication required)
- **CSS3** - Styling with modern features

## API Used

**PokéAPI** (https://pokeapi.co)
- Completely free to use
- No API key or authentication required
- Comprehensive Pokémon database
- RESTful JSON API
- Data for all Pokémon from generations 1-9

## Installation and Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/mtrishal123/pokemon-finder.git
   cd pokemon-finder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the URL shown in terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Netlify

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/) and sign in
3. Click "Add new site" → "Import an existing project"
4. Choose "Deploy with GitHub"
5. Select your repository
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click "Deploy site"

### Method 2: Manual Deploy

1. Build the project locally:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist` folder to Netlify dashboard

## Project Structure

```
pokemon-finder/
├── public/              # Static assets
├── src/
│   ├── App.tsx         # Main application component
│   ├── App.css         # Application styles
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## How to Use

1. Enter a Pokémon name (e.g., "pikachu") or Pokédex number (e.g., "25") in the search box
2. Click "Search" or press Enter
3. View detailed information including:
   - Pokémon name and ID
   - Sprite image
   - Types
   - Height and weight
   - Abilities
4. Use quick search buttons for popular Pokémon like Pikachu, Charizard, and Mewtwo

## Features Breakdown

### Search Functionality
- Accepts both Pokémon names and Pokédex numbers
- Case-insensitive search
- Input validation with helpful error messages
- Loading state during API calls

### Data Display
- High-quality Pokémon sprites
- Type badges (fire, water, grass, etc.)
- Metric measurements for height and weight
- Comprehensive abilities list
- Clean, card-based layout

### User Experience
- Responsive design works on all screen sizes
- Quick search buttons for instant results
- Clear error messages
- Loading indicators
- Accessible form controls with proper labels

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for educational purposes.

## Acknowledgments

- Pokémon data provided by [PokéAPI](https://pokeapi.co)
- Pokémon and Pokémon character names are trademarks of Nintendo
- Built as a student project for INFO 6150

## Contact

Created by Trishal Varma Mudunuri - github.com/mtrishal123

## Course Information

**Course:** INFO 6150 - Web Design and User Experience Engineering  
**Institution:** Northeastern University  
**Assignment:** Bonus Credit - API Integration Project  
**Date:** December 2024