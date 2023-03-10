import { useNavigate } from "react-router-dom";
import "@styles/NotFound.scss";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFound__container">
      <h1 className="notFound__h1">404 Not Found</h1>
      <button className="notFound__button" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};
