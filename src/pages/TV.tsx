import { Card } from "@components/Card";
import { TV as TVType } from "@interfaces/TV.interface";
import "@styles/ListTitles.scss";

export const TV = ({
  popularTV,
  topRatedTV,
  URL_IMAGE,
}: {
  popularTV: Array<TVType>;
  topRatedTV: Array<TVType>;
  URL_IMAGE: string;
}) => {
  const tv = popularTV.concat(topRatedTV);
  return (
    <div className="listTitles">
      <h1 className="listTitles__h1">TV</h1>
      <div className="listTitles__layout">
        {tv.map((tv, index) => (
          <Card
            key={index}
            URL_IMAGE={URL_IMAGE}
            poster_path={tv.poster_path}
            id={tv.id}
            url={'/details-tv'}
          />
        ))}
      </div>
    </div>
  );
};
