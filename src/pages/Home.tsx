import { Card } from "@components/Card";
import { Loader } from "@components/Loader";
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
  if (
    popularMovies.length === 0 ||
    topRatedMovies.length === 0 ||
    popularTV.length === 0 ||
    topRatedTV.length === 0
  ) {
    return <Loader />;
  }
  return (
    <div className="home">
      <div className="home__container">
        <h1 className="home__h1">Popular Movies</h1>
        <div className="home__layout">
          {popularMovies.map((movie) => (
            <Card
              key={movie.id}
              URL_IMAGE={URL_IMAGE}
              poster_path={movie.poster_path}
              id={movie.id}
              url={"/movie"}
            />
          ))}
        </div>
      </div>
      <div className="home__container">
        <h1 className="home__h1">Top Movies</h1>
        <div className="home__layout">
          {topRatedMovies.map((movie) => (
            <Card
              key={movie.id}
              URL_IMAGE={URL_IMAGE}
              poster_path={movie.poster_path}
              id={movie.id}
              url={"/movie"}
            />
          ))}
        </div>
      </div>
      <div className="home__container">
        <h1 className="home__h1">Popular TV</h1>
        <div className="home__layout">
          {popularTV.map((tv) => (
            <Card
              key={tv.id}
              URL_IMAGE={URL_IMAGE}
              poster_path={tv.poster_path}
              id={tv.id}
              url={"/tv"}
            />
          ))}
        </div>
      </div>
      <div className="home__container">
        <h1 className="home__h1">Top TV</h1>
        <div className="home__layout">
          {topRatedTV.map((tv) => (
            <Card
              key={tv.id}
              URL_IMAGE={URL_IMAGE}
              poster_path={tv.poster_path}
              id={tv.id}
              url={"/tv"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
1;
