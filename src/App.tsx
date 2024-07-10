

import React, { useRef, useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import { fetchGenres } from "./api/tmdb";
import { Genre } from "./types";
import { useMovies } from "./hooks/useMovies";


import "./App.css";

const App: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const { movies, years, loading, loadMoreYears, toggleGenre, selectedGenres } =
    useMovies(2012);
  const appRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const loadGenres = async () => {
      const fetchedGenres = await fetchGenres();
      setGenres(fetchedGenres);
    };
    loadGenres();
  }, []);

  const handleScroll = useCallback(() => {
    if (!appRef.current || isScrolling) return;

    const { scrollTop, clientHeight, scrollHeight } = appRef.current;

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
    const appElement = appRef.current;
    if (appElement) {
      appElement.addEventListener("scroll", handleScroll);
      return () => appElement.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <div className="app" ref={appRef}>
      <Header />
      <GenreFilter
        genres={genres}
        selectedGenres={selectedGenres}
        onGenreToggle={toggleGenre}
      />
      {years.map((year) => (
        <MovieList
          key={year}
          movies={movies[year] || []}
          year={year}
          loading={loading && !movies[year]}
        />
      ))}
      {loading && <p>Loading more movies...</p>}
    </div>
  );
};

export default App;
