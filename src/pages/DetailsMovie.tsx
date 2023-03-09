import { useState, useEffect } from "react";
import { getMoviesDetails } from "@api/index";
import { useParams } from "react-router-dom";
import { MovieDetails } from "@interfaces/MovieDetails.interface";

export const DetailsMovie = ({ URL_IMAGE }: { URL_IMAGE: string }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetails>({
    title: "",
    poster_path: "",
    overview: "",
    vote_average: 0,
    genres: [],
  });
  useEffect(() => {
    getMoviesDetails(Number(id)).then((res) =>
      setMovie({
        title: res.title,
        poster_path: `${URL_IMAGE}${res.poster_path}`,
        overview: res.overview,
        vote_average: res.vote_average,
        genres: res.genres,
      })
    );
  }, [id]);
  console.log(movie);
  return <img src={movie.poster_path} alt="" />;
};
