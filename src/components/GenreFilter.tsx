import React from 'react';
import { Genre } from '../types';

interface Props {
  genres: Genre[];
  selectedGenres: number[];
  onGenreToggle: (genreId: number) => void;
}

const GenreFilter: React.FC<Props> = ({ genres, selectedGenres, onGenreToggle }) => (
  <div className="genre-filter-container">
    <div className="genre-filter-scroll">
      {genres.map((genre) => (
        <button
          key={genre.id}
          className={`genre-button ${selectedGenres.includes(genre.id) ? 'active' : ''}`}
          onClick={() => onGenreToggle(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  </div>
);

export default GenreFilter;