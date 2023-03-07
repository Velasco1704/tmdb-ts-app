import { useEffect } from "react";
import { useContextMovies } from "./context";
import { ContextMovie } from "@interfaces/Context.interface";

export const App = () => {
  const { popularMovies, topRatedMovies, popularTV, topRatedTV, getAllMovies } =
    useContextMovies() as ContextMovie;
  useEffect(() => {
    getAllMovies();
  }, []);

  return <div>App</div>;
};
