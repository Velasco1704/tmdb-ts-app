import { useNavigate } from "react-router-dom";
import "@styles/Card.scss";

export const Card = ({
  URL_IMAGE,
  poster_path,
  id,
  url,
}: {
  URL_IMAGE: string;
  poster_path: string;
  id: number;
  url: string;
}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${url}/${id}`)} className="card">
      <img
        className="card__img"
        src={`${URL_IMAGE}${poster_path}`}
        alt="Image"
      />
    </div>
  );
};
