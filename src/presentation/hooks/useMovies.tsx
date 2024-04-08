import {useState, useEffect} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as useCases from '../../core/use-cases';
import {movieDBAdapter} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [topRatingMovies, setTopRatingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  let popularPage = 1;

  useEffect(() => {
    initialMovies();
  }, []);

  const initialMovies = async () => {
    setLoading(true);
    try {
      const [movies, topRatingMovies, popularMovies, upcomingMovies] =
        await Promise.all([
          useCases.makeNowPlayingUseCase(movieDBAdapter),
          useCases.makeTopRatedUseCase(movieDBAdapter),
          useCases.makePopularUseCase(movieDBAdapter),
          useCases.makeUpcomingUseCase(movieDBAdapter),
        ]);

      setMovies(movies);
      setTopRatingMovies(topRatingMovies);
      setPopularMovies(popularMovies);
      setUpcomingMovies(upcomingMovies);
    } catch (error: any) {
      const message = error.message as Error;

      setError(message.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    movies,
    popularMovies,
    topRatingMovies,
    upcomingMovies,
    loading,
    error,
    popularNextPage: async () => {
      popularPage++;
      await useCases
        .makePopularUseCase(movieDBAdapter, {
          page: popularPage,
        })
        .then(newMovies => {
          setPopularMovies([...popularMovies, ...newMovies]);
        });
    },
  };
};
