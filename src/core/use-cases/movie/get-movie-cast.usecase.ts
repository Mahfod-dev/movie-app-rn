import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {CastMovieDBResponse} from '../../../infrastructure/interface/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Cast} from '../../entities/cast.entity';

export const getMovieCast = async (
  movieId: number,
  fetcher: HttpAdapter,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<CastMovieDBResponse>(
      `/${movieId}/credits`,
    );

    const actors = cast.map(actor =>
      MovieMapper.fromCastMovieDBResponseToEntity(actor),
    );
    return actors;
  } catch (error) {
    throw new Error('Error fetching movie cast');
  }
};
