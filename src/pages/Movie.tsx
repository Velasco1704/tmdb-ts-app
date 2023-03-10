import { Card } from "@components/Card";
import { Loader } from "@components/Loader";
import { Movie } from "@interfaces/Movie.interface";
import "@styles/ListTitles.scss";

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
  if (movies.length === 0) {
    return <Loader />;
  }
  return (
    <div className="listTitles">
      <h1 className="listTitles__h1">Movies</h1>
      <div className="listTitles__layout">
        {movies.map((movie, index) => (
          <Card
            key={index}
            URL_IMAGE={URL_IMAGE}
            poster_path={movie.poster_path}
            id={movie.id}
            url={`/movie`}
          />
        ))}
      </div>
    </div>
  );
};
