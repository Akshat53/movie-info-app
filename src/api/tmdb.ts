import axios from 'axios';
import { Movie,Genre } from '../types';
import { API_KEY, API_BASE_URL } from '../config';

export const fetchMovies = async (year: number, page: number = 1, genres: string = ''): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        sort_by: 'popularity.desc',
        primary_release_year: year,
        page: page,
        vote_count: { gte: 100 },
        with_genres: genres,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
export const fetchGenres = async (): Promise<Genre[]> => {
  const response = await axios.get(`${API_BASE_URL}/genre/movie/list`, {
    params: { api_key: API_KEY },
  });
  return response.data.genres;
};