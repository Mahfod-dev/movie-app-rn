import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {TopRatedMovieResponse} from '../../../infrastructure/interface/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

export const makeTopRatedUseCase = async (
  movieRepository: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await movieRepository.get<TopRatedMovieResponse>(
      '/top_rated',
    );
    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching top rated movies');
  }
};
