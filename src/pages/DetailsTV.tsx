import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTVDetails } from "@api/index";
import { TVDetails } from "@interfaces/TVDetails.interface";

export const DetailsTV = ({ URL_IMAGE }: { URL_IMAGE: string }) => {
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
  console.log(tv);
  return <img src={tv.poster_path} alt="" />;
};
