import { createContext, useContext, useState } from "react";
import {
  getPopularMovies,
  getPopularTV,
  getTopRatedMovies,
  getTopRatedTV,
} from "@api/index";
import { Movie } from "@interfaces/Movie.interface";
import { TV } from "@interfaces/TV.interface";

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
  const [popularMovies, setPopularMovies] = useState<Array<Movie>>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Array<Movie>>([]);
  const [popularTV, setPopularTV] = useState<Array<TV>>([]);
  const [topRatedTV, setTopRatedTV] = useState<Array<TV>>([]);

  const getAllMovies = () => {
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
