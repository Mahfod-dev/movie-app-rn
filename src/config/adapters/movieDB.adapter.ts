import {AxiosAdapter} from './http/axios.adapter';
import {MOVIE_DB_API_KEY} from '@env';

export const movieDBAdapter = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: `${MOVIE_DB_API_KEY}`,
    language: 'fr-FR',
  },
});
