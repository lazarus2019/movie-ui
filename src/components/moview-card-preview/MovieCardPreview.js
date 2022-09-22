import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import { getCountryName, getYearRelease } from "../../utils";
import Button from "../button/Button";
import MovieGenres from "../movie-genres/MovieGenres";
import Rating from "../rating/Rating";
import "./movie-card-preview.scss";

function MovieCardPreview(props) {
  const navigate = useNavigate();
  const { id, title, category } = props;
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      console.log(response);
      window.scrollTo(0, 0);
    };
    getDetail();
    setLoading(false);
  }, [id, title, category]);

  return (
    <div className="movie-card__preview">
      <div className="movie-card__preview__header">
        <h3 className="movie-card__preview__header__heading">{title}</h3>
        <p className="movie-card__preview__header__quality">HD</p>
      </div>
      {!loading && item && (
        <>
          <div className="movie-card__preview__info">
            <p className="movie-card__preview__info__imdb">
              IMDb: {item.vote_average.toFixed(1) || "N/A"}
            </p>
            <p>{getYearRelease(item.first_air_date || item.release_date)}</p>
            <p>{item.runtime && `${item.runtime} minutes`}</p>
            <p>
              {item.number_of_seasons &&
                `${item.number_of_seasons} ${
                  item.number_of_seasons > 1 ? "Seasons" : "Season"
                }`}
            </p>
          </div>
          <div className="movie-card__preview__box">
            <div className="movie-card__preview__overview">{item.overview}</div>
            <Rating
              average={Number(item.vote_average)}
              count={item.vote_count}
            />
            <div className="movie-card__preview__genres">
              <p>Language: {getCountryName(item.original_language)}</p>
              <MovieGenres genres={item.genres} category={category} />
            </div>
            <Button
              className="fullWidth small flex noHover"
              onClick={() => navigate(`/${category}/${item.id}`)}
            >
              <i className="bx bx-play-circle" />
              <p>Watch Now</p>
            </Button>
            <Button className="fullWidth small flex noHover grey">
              Add to Favorite
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

MovieCardPreview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MovieCardPreview;
