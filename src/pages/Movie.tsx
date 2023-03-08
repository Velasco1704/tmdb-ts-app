import { Movie } from "@interfaces/Movie.interface";
import "@styles/Movies.scss";

export const Movies = ({
  popularMovies,
  topRatedMovies,
  URL_IMAGE,
}: {
  popularMovies: Array<Movie>;
  topRatedMovies: Array<Movie>;
  URL_IMAGE: string;
}) => {
  const movies = popularMovies.concat(topRatedMovies);
  return (
    <div className="movies">
      <h1 className="movies__h1">Movies</h1>
      <div className="movies__layout">
        {movies.map((movie) => (
          <div className="movies__img" key={movie.id}>
            <img src={`${URL_IMAGE}${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
