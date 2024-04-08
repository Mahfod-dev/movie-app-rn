import {Movie, FullMovie} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';
import type {
  Result,
  FullMovieResponse,
  CastMovieDBResponse,
  MovieDBCast,
} from '../interface/movie-db.response';

export class MovieMapper {
  static fromMovieDBResultToEntity(data: Result): Movie {
    return {
      id: data.id,
      title: data.title,
      overview: data.overview,
      description: data.overview,
      releaseDate: new Date(data.release_date),
      poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      rating: data.vote_average,
      backdrop: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
    };
  }

  static fromFullMovieResponseToEntity(data: FullMovieResponse): FullMovie {
    return {
      id: data.id,
      title: data.title,
      overview: data.overview,
      description: data.overview,
      releaseDate: new Date(data.release_date),
      poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      rating: data.vote_average,
      backdrop: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
      genres: data.genres.map(genre => genre.name),
      duration: data.runtime,
      budget: data.budget,
      originalTitle: data.original_title,
      productionCompanies: data.production_companies.map(
        company => company.name,
      ),
    };
  }

  static fromCastMovieDBResponseToEntity(actor: MovieDBCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'No character found',
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
    };
  }
}
