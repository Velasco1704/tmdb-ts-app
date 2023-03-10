import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@components/Card";
import { SearchMovieOrTV } from "@api/index";
import "@styles/Search.scss";

interface SearchTypes {
  value: string;
  data: Array<any>;
}

export const Search = ({ URL_IMAGE }: { URL_IMAGE: string }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<SearchTypes>({
    value: "",
    data: [],
  });
  useEffect(() => {
    SearchMovieOrTV(search.value).then((res) =>
      setSearch({ ...search, data: res })
    );
  }, [search.value]);

  return (
    <div className="search__container">
      <div className="search__layout__input">
        <button className="search__button" onClick={() => navigate("/")}>
          Back
        </button>
        <input
          className="search__input"
          placeholder="search"
          onChange={({ target }) =>
            setSearch({ ...search, value: target.value })
          }
          type="text"
        />
      </div>
      <div className="search__layout">
        {search.data.map((item, index) => (
          <Card
            key={index}
            URL_IMAGE={URL_IMAGE}
            id={item.id}
            poster_path={item.poster_path}
            url={`/${item.media_type}`}
          />
        ))}
      </div>
    </div>
  );
};
