import "./movie-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";
import apiConfig from "../../api/apiConfig";
import { category } from "../../api/tmdbApi";
import getImage from "../../utils";
import Tippy from "@tippyjs/react/headless";
import MovieCartPreview from "../moview-card-preview/MovieCardPreview";

function MovieCard(props) {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = getImage(
    item.poster_path ?? item.backdrop_path ?? false,
    apiConfig.w500Image
  );

  const renderPreview = (props, category) => {
    return (
      <div tabIndex="1" {...props}>
        <MovieCartPreview
          id={props.id}
          title={props.title}
          category={category}
        />
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[100, 0]}
        offset={[150, -360]}
        placement="top"
        render={() => renderPreview(item, props.category)}
        // animation={false} // hide when mouseout [no animation]
      >
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
      </Tippy>
    </div>
  );
}

export default MovieCard;
