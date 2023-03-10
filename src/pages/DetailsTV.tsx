import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTVDetails } from "@api/index";
import { TVDetails } from "@interfaces/TVDetails.interface";
import { Loader } from "@components/Loader";
import "@styles/Details.scss";

export const DetailsTV = ({ URL_IMAGE }: { URL_IMAGE: string }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tv, setTV] = useState<TVDetails>({
    name: "",
    poster_path: "",
    overview: "",
    vote_average: 0,
    genres: [],
  });
  useEffect(() => {
    getTVDetails(Number(id)).then((res) =>
      setTV({
        name: res.name,
        poster_path: `${URL_IMAGE}${res.poster_path}`,
        overview: res.overview,
        vote_average: res.vote_average,
        genres: res.genres,
      })
    );
  }, []);

  if (
    tv.name === "" ||
    tv.poster_path === "" ||
    tv.overview === "" ||
    tv.vote_average === 0
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
          <img className="details__img" src={tv.poster_path} alt={tv.name} />
          <div className="details__div">
            {parseInt(`${tv.vote_average}`)}/10
          </div>
        </div>
        <div className="details__info">
          <h1 className="details__h1">{tv.name}</h1>
          <div className="details__genres">
            {tv.genres.map((g, index) => (
              <span key={index} className="details__span">
                {g.name}
              </span>
            ))}
          </div>
          <p className="details__p">{tv.overview}</p>
        </div>
      </div>
    </div>
  );
};
