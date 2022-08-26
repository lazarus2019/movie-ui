import "./movie-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";
import apiConfig from "../../api/apiConfig";
import { category } from "../../api/tmdbApi";
import getImage from "../../utils/getImage";

function MovieCard(props) {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = getImage(
    item.poster_path ?? item.backdrop_path ?? false,
    apiConfig.w500Image
  );

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        {item.vote_average === 0 ? null : (
          <div className="movie-card__vote">
            <div className="movie-card__vote__item">
              {item.vote_average.toFixed(1)}
            </div>
          </div>
        )}
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
}

export default MovieCard;
