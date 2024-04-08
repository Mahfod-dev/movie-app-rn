export interface Movie {
  id: number;
  title: string;
  overview: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
  description: string;
}

export interface FullMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}
