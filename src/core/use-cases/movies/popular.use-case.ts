import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {PopularMovieDBResponse} from '../../../infrastructure/interface/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const makePopularUseCase = async (
  movieRepository: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await movieRepository.get<PopularMovieDBResponse>(
      '/popular',
      {
        params: {
          page: options?.page ?? 1,
        },
      },
    );

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching popular movies');
  }
};
