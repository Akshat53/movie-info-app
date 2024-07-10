import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../types';

interface Props {
  movies: Movie[];
  year: number;
  loading: boolean;
}

const MovieList: React.FC<Props> = ({ movies, year, loading }) => (
  <div className="movie-list">
    <h2>{year}</h2>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    )}
    {!loading && movies.length === 0 && <p>No movies found for this year.</p>}
  </div>
);

export default MovieList;