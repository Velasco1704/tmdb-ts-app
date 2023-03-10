import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useContextMovies } from "./context";
import { Nav } from "@components/Nav";
import { Home } from "@pages/Home";
import { Movies } from "@pages/Movie";
import { TV } from "@pages/TV";
import { NotFound } from "@pages/NotFound";
import { DetailsMovie } from "@pages/DetailsMovie";
import { Search } from "@pages/Search";
import { DetailsTV } from "@pages/DetailsTV";
import { ContextMovie } from "@interfaces/Context.interface";
import "@styles/App.scss";

export const App = () => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
  const { popularMovies, topRatedMovies, popularTV, topRatedTV, getAllMovies } =
    useContextMovies() as ContextMovie;
  useEffect(() => {
    getAllMovies();
  }, []);
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
        <Route path="/search" element={<Search URL_IMAGE={URL_IMAGE} />} />
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
          path={"/movie/:id"}
          element={<DetailsMovie URL_IMAGE={URL_IMAGE} />}
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
        <Route path={"/tv/:id"} element={<DetailsTV URL_IMAGE={URL_IMAGE} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
