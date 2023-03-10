import { useState, useEffect } from "react";
import { getMoviesDetails } from "@api/index";
import { useParams, useNavigate } from "react-router-dom";
import { MovieDetails } from "@interfaces/MovieDetails.interface";
import { Loader } from "@components/Loader";
import "@styles/Details.scss";

export const DetailsMovie = ({ URL_IMAGE }: { URL_IMAGE: string }) => {
  const navigate = useNavigate();
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

  if (
    movie.title === "" ||
    movie.poster_path === "" ||
    movie.overview === "" ||
    movie.vote_average === 0
  ) {
    return <Loader />;
  }
  return (
    <div className="details__container">
      <button className="details__button" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="details__layout">
        <div className="details__container__img">
          <img
            className="details__img"
            src={movie.poster_path}
            alt={movie.title}
          />
          <div className="details__div">
            {parseInt(`${movie.vote_average}`)}/10
          </div>
        </div>
        <div className="details__info">
          <h1 className="details__h1">{movie.title}</h1>
          <div className="details__genres">
            {movie.genres.map((g, index) => (
              <span key={index} className="details__span">
                {g.name}
              </span>
            ))}
          </div>
          <p className="details__p">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
