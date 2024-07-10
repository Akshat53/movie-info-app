import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import Spinner from "./components/Spinner";
import { fetchGenres } from "./api/tmdb";
import { Genre } from "./types";
import { useMovies } from "./hooks/useMovies";

import "./App.css";

const App: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const { movies, years, loading, loadMoreYears, toggleGenre, selectedGenres } =
    useMovies(2012);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const loadGenres = async () => {
      const fetchedGenres = await fetchGenres();
      setGenres(fetchedGenres);
    };
    loadGenres();
  }, []);

  const handleScroll = useCallback(() => {
    if (isScrolling) return;

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop === 0) {
      setIsScrolling(true);
      loadMoreYears("prev");
      setTimeout(() => setIsScrolling(false), 500);
    } else if (scrollHeight - scrollTop <= clientHeight + 100) {
      setIsScrolling(true);
      loadMoreYears("next");
      setTimeout(() => setIsScrolling(false), 500); 
    }
  }, [loadMoreYears, isScrolling]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="app">
      <Header />
      <GenreFilter
        genres={genres}
        selectedGenres={selectedGenres}
        onGenreToggle={toggleGenre}
      />
      <div className="content-wrapper">
        {years.map((year) => (
          <MovieList
            key={year}
            movies={movies[year] || []}
            year={year}
            loading={loading && !movies[year]}
          />
        ))}
      </div>
      {isScrolling && <Spinner />}
    </div>
  );
};

export default App;