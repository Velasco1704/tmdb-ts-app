import { useNavigate } from 'react-router-dom';
import "@styles/Card.scss";

export const Card = ({
  URL_IMAGE,
  poster_path,
  id,
  url
}: {
  URL_IMAGE: string;
  poster_path: string;
  id: number;
  url: string;
}) => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`${url}/${id}`)
    console.log(`${url}/${id}`)
  };

  return (
    <div onClick={handleDetails} className="card">
      <img
        className="card__img"
        src={`${URL_IMAGE}${poster_path}`}
        alt="name of title"
      />
    </div>
  );
};
