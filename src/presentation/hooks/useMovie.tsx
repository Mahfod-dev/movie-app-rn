import {useEffect, useState} from 'react';
import {FullMovie} from '../../core/entities/movie.entity';
import * as useCases from '../../core/use-cases';
import {movieDBAdapter} from '../../config/adapters/movieDB.adapter';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieId: string) => {
  const [movie, setMovie] = useState<FullMovie | null>(null);
  const [cast, setCast] = useState<Cast[] | null>(null); // [1
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setLoading(true);
    try {
      const [movie, cast] = await Promise.all([
        useCases.getMovieById(movieId, movieDBAdapter),
        useCases.getMovieCast(+movieId, movieDBAdapter),
      ]);

      setMovie(movie);
      setCast(cast);
    } catch (error: any) {
      const message = error.message;
      setError(`Error fetching movie: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return {movie, cast, loading, error};
};
