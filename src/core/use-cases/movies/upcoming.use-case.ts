import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {UpcomingMovieResponse} from '../../../infrastructure/interface/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

export const makeUpcomingUseCase = async (
  movieRepository: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await movieRepository.get<UpcomingMovieResponse>(
      '/upcoming',
    );

    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching upcoming movies');
  }
};
