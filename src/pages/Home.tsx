import { Movie } from "@interfaces/Movie.interface";
import { TV } from "@interfaces/TV.interface";
import "@styles/Home.scss";

export const Home = ({
  popularMovies,
  topRatedMovies,
  popularTV,
  topRatedTV,
  URL_IMAGE,
}: {
  popularMovies: Array<Movie>;
  topRatedMovies: Array<Movie>;
  popularTV: Array<TV>;
  topRatedTV: Array<TV>;
  URL_IMAGE: string;
}) => {
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__h1">Popular Movies</h1>
        <div className="home__layout">
          {popularMovies.map((movie) => (
            <div key={movie.id} className="home__img">
              <img
                src={`${URL_IMAGE}${movie.poster_path}`}
                title={movie.title}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="home__container">
        <h1 className="home__h1">Top Movies</h1>
        <div className="home__layout">
          {topRatedMovies.map((movie) => (
            <div key={movie.id} className="home__img">
              <img
                src={`${URL_IMAGE}${movie.poster_path}`}
                title={movie.title}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="home__container">
        <h1 className="home__h1">Popular TV</h1>
        <div className="home__layout">
          {popularTV.map((movie) => (
            <div key={movie.id} className="home__img">
              <img
                src={`${URL_IMAGE}${movie.poster_path}`}
                title={movie.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="home__container">
        <h1 className="home__h1">Top TV</h1>
        <div className="home__layout">
          {topRatedTV.map((movie) => (
            <div key={movie.id} className="home__img">
              <img
                src={`${URL_IMAGE}${movie.poster_path}`}
                title={movie.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
1;
