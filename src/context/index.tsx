import { createContext, useContext, useState } from "react";
import {
  getPopularMovies,
  getPopularTV,
  getTopRatedMovies,
  getTopRatedTV,
} from "@api/index";
import { PopularMovie } from "@interfaces/PopularMovies.interface";
import { PopularTV } from "@interfaces/PopularTV.interface";
import { TopRatedMovie } from "@interfaces/TopRatedMovies.interface";
import { TopRatedTV } from "@interfaces/TopRatedTV.interface";

const Context = createContext({});

export const useContextMovies = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useTask must be used within a MoviesContextProvider");
  return context;
};

export const MoviesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [popularMovies, setPopularMovies] = useState<Array<PopularMovie>>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Array<TopRatedMovie>>(
    []
  );
  const [popularTV, setPopularTV] = useState<Array<PopularTV>>([]);
  const [topRatedTV, setTopRatedTV] = useState<Array<TopRatedTV>>([]);

  const getAllMovies = () => {
    1;
    getPopularMovies().then((res) => setPopularMovies(res));
    getTopRatedMovies().then((res) => setTopRatedMovies(res));
    getPopularTV().then((res) => setPopularTV(res));
    getTopRatedTV().then((res) => setTopRatedTV(res));
  };

  return (
    <Context.Provider
      value={{
        popularMovies,
        topRatedMovies,
        popularTV,
        topRatedTV,
        getAllMovies,
      }}
    >
      {children}
    </Context.Provider>
  );
};
