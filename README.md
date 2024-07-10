# Movie List App

## Overview
The Movie List App is a dynamic web application built with React and TypeScript, showcasing top movies from The Movie Database (TMDb) API. It features infinite scrolling, genre filtering, and a responsive design, offering users an engaging way to explore popular films across different years.

## Features
- Display top 20 movies for each year, starting from 2012
- Infinite scroll to load previous and next years' movies
- Genre-based filtering
- Responsive design for various screen sizes
- Custom UI components with smooth animations
- Real-time data fetching from TMDb API

## Tech Stack
- React 18
- TypeScript 4
- CSS3 (custom styling)

## Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation
1. Clone the repository: https://github.com/Akshat53/movie-info-app.git
2. Navigate to the project directory: cd movie-list-app
3. Install dependencies: npm install or npm i


## Usage
To start the development server: npm start 

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

**Important Note:** If API requests fail, you may need to use a VPN. Some regions might have restrictions accessing The Movie Database API.

## Project Structure
- `src/components/`: React components
- `src/api/`: API-related functions
- `src/hooks/`: Custom React hooks
- `src/types/`: TypeScript type definitions
- `src/App.tsx`: Main application component
- `src/App.css`: Main stylesheet

## Key Components
- `App`: Main component
- `Header`: Displays app title
- `GenreFilter`: Genre selection UI
- `MovieList`: Renders movie list for each year
- `MovieCard`: Displays individual movie info
- `Spinner`: Loading indicator

## API Integration
Uses The Movie Database (TMDb) API:
- Movie Discovery: `https://api.themoviedb.org/3/discover/movie`
- Genre List: `https://api.themoviedb.org/3/genre/movie/list`

## Features in Detail
1. **Initial Load**: Shows top 20 movies from 2012
2. **Infinite Scroll**: 
   - Scroll up: Load previous year's movies
   - Scroll down: Load next year's movies
3. **Genre Filtering**: 
   - Dynamic genre fetching
   - Multiple genre selection
   - Real-time movie list update
4. **Responsive Design**: Adapts to various screen sizes

## Styling
- Custom CSS without external UI libraries
- Responsive design with media queries

## Troubleshooting
If you encounter issues:
1. Verify all dependencies are installed
2. Check your internet connection
3. Try using a VPN if API requests fail
4. Clear browser cache and restart the app

## Contributing
Contributions are welcome. Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.

## Acknowledgments
- The Movie Database (TMDb) for their comprehensive API
- React community for excellent documentation and support

## Contact
For questions or feedback, please contact Akshat Kumar Singh at singh.akshat.akshat26@gmail.com 