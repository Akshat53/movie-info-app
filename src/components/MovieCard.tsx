import React from 'react';
import { Movie } from '../types';
import { formatDate } from '../utils/helper';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => (
  <div className="movie-card">
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p className="rating">Rating: {movie.vote_average}</p>
    <p className="release-date">Release Date: {formatDate(movie.release_date)}</p>
    <p className="overview">{movie.overview}</p>
  </div>
);

export default MovieCard;