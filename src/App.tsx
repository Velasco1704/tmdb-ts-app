import { useEffect } from "react";
import { useContextMovies } from "./context";
import { ContextMovie } from "@interfaces/Context.interface";
import { Routes, Route } from "react-router-dom";
import { Nav } from "@components/Nav";
import { Home } from "@pages/Home";
import { Movies } from "@pages/Movie";
import { TV } from "@pages/TV";

export const App = () => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const { popularMovies, topRatedMovies, popularTV, topRatedTV, getAllMovies } = useContextMovies() as ContextMovie;
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              URL_IMAGE={URL_IMAGE}
              popularMovies={popularMovies}
              topRatedMovies={topRatedMovies}
              popularTV={popularTV}
              topRatedTV={topRatedTV}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              URL_IMAGE={URL_IMAGE}
              popularMovies={popularMovies}
              topRatedMovies={topRatedMovies}
            />
          }
        />
        <Route
          path="/tv"
          element={<TV popularTV={popularTV} topRatedTV={topRatedTV} />}
        />
        <Route path="/details" element={""} />
      </Routes>
    </div>
  );
};
