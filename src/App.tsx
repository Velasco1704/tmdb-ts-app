import { useEffect } from "react";
import { useContextMovies } from "./context";
import { ContextMovie } from "@interfaces/Context.interface";
import { Routes, Route } from "react-router-dom";
import { Nav } from "@components/Nav";
import { Home } from "@pages/Home";
import { Movies } from "@pages/Movie";
import { TV } from "@pages/TV";
import { NotFound } from "@pages/NotFound";
import "@styles/App.scss";
import { DetailsMovie } from "@pages/DetailsMovie";
import { DetailsTV } from "@pages/DetailsTV";

export const App = () => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const { popularMovies, topRatedMovies, popularTV, topRatedTV, getAllMovies } =
    useContextMovies() as ContextMovie;
  useEffect(() => {
    getAllMovies();
  }, [!window.location.reload]);
  return (
    <div className="app">
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
          element={
            <TV
              URL_IMAGE={URL_IMAGE}
              popularTV={popularTV}
              topRatedTV={topRatedTV}
            />
          }
        />
        <Route
          path={"/details-movie/:id"}
          element={<DetailsMovie URL_IMAGE={URL_IMAGE} />}
        />
        <Route path={"/details-tv/:id"} element={<DetailsTV URL_IMAGE={URL_IMAGE} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
