import React from "react";
import MovieCard from "./MovieCard";
import ShimmerCard from "./ShimmerCard";
import { Movie } from "../types";

interface Props {
  movies: Movie[];
  year: number;
  loading: boolean;
}

const MovieList: React.FC<Props> = ({ movies, year, loading }) => (
  <div className="movie-list">
    <h2>{year}</h2>
    <div className="movie-grid">
      {loading ? (
        [...Array(8)].map((_, index) => <ShimmerCard key={index} />)
      ) : movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p className="no-movies">No movies found for this year.</p>
      )}
    </div>
  </div>
);

export default MovieList;
