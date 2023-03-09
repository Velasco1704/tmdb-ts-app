export interface MovieDetails {
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  genres: Array<Genres>;
}

interface Genres {
  id: number;
  name: string;
}
