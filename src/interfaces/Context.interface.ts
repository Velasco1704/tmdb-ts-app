import { Details } from "./Details.interface";
import { Movie } from "./Movie.interface";
import { TV } from "./TV.interface";

export interface ContextMovie {
  popularMovies: Array<Movie>;
  topRatedMovies: Array<Movie>;
  nowPlaying: Array<Movie>;
  popularTV: Array<TV>;
  topRatedTV: Array<TV>;
  setPopularMovies: (value: Array<Movie>) => void;
  setTopRatedMovies: (value: Array<Movie>) => void;
  setNowPlaying: (value: Array<Movie>) => void;
  setPopularTV: (value: Array<TV>) => void;
  setTopRatedTV: (value: Array<TV>) => void;
  getAllMovies: () => void;
}
