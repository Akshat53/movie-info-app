export const API_KEY = '2dca580c2a14b55200e784d157207b4d';
export const API_BASE_URL = 'https://api.themoviedb.org/3';

if (!API_KEY || !API_BASE_URL) {
  throw new Error('Missing required environment variables. Please check your .env file.');
}