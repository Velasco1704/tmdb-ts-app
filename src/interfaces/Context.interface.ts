import { PopularMovie } from "./PopularMovies.interface";
import { PopularTV } from "./PopularTV.interface";
import { TopRatedMovie } from "./TopRatedMovies.interface";
import { TopRatedTV } from "./TopRatedTV.interface";

export interface ContextMovie {
  popularMovies: Array<PopularMovie>;
  topRatedMovies: Array<TopRatedMovie>;
  popularTV: Array<PopularTV>;
  topRatedTV: Array<TopRatedTV>;
  getAllMovies: () => void;
}
