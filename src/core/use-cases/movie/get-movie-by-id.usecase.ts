import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {FullMovieResponse} from '../../../infrastructure/interface/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieById = async (
  movieId: string,
  movieRepository: HttpAdapter,
): Promise<FullMovie> => {
  try {
    const movie = await movieRepository.get<FullMovieResponse>(`/${movieId}`);
    return MovieMapper.fromFullMovieResponseToEntity(movie);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movie');
  }
};
