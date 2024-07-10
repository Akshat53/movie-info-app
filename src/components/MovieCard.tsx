import React from "react";
import { Movie } from "../types";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => (
  <div className="movie-card">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />
    <div className="info">
      <h3>{movie.title}</h3>
      <div className="rating">Rating: {movie.vote_average}</div>
    </div>
  </div>
);

export default MovieCard;
