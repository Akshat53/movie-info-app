import { useState, useEffect, useCallback } from "react";
import { Movie } from "../types";
import { fetchMovies } from "../api/tmdb";

export const useMovies = (initialYear: number) => {
  const [movies, setMovies] = useState<Record<number, Movie[]>>({});
  const [years, setYears] = useState<number[]>([initialYear]);
  const [loading, setLoading] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const currentYear = new Date().getFullYear();

  const loadMoviesForYear = useCallback(
    async (year: number) => {
      if (movies[year] || year < 2012 || year > currentYear) return;
      setLoading(true);
      try {
        const newMovies = await fetchMovies(year, 1, selectedGenres.join(","));
        setMovies((prev) => ({
          ...prev,
          [year]: newMovies.slice(0, 20),
        }));
      } catch (error) {
        console.error(`Error loading movies for year ${year}:`, error);
      } finally {
        setLoading(false);
      }
    },
    [selectedGenres, movies, currentYear]
  );

  useEffect(() => {
    years.forEach((year) => loadMoviesForYear(year));
  }, [years, loadMoviesForYear]);

  const loadMoreYears = useCallback(
    (direction: "prev" | "next") => {
      setYears((prev) => {
        const lastYear =
          direction === "prev" ? Math.min(...prev) : Math.max(...prev);
        const newYear = direction === "prev" ? lastYear - 1 : lastYear + 1;
        if (newYear < 2012 || newYear > currentYear || prev.includes(newYear)) {
          return prev;
        }
        return [...prev, newYear].sort((a, b) => a - b);
      });
    },
    [currentYear]
  );

  const toggleGenre = (genreId: number) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );

    setMovies({});
    setYears([initialYear]);
  };

  return {
    movies,
    years,
    loading,
    loadMoreYears,
    toggleGenre,
    selectedGenres,
  };
};
