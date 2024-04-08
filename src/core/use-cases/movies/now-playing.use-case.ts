import type {Movie} from './../../entities/movie.entity';
import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interface/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';

export const makeNowPlayingUseCase = async (
  movieRepository: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await movieRepository.get<NowPlayingResponse>(
      '/now_playing',
    );

    return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching now playing movies');
  }
};
