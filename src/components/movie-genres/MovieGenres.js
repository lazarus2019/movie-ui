import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieGenres(props) {
  const { genres, category } = props;

  const topGenres = genres.slice(0, 5);

  return (
    <p>
      Genres:{" "}
      {genres &&
        topGenres.map((genre, i) => (
          <Link to={`/${category}/g/${genre.id}`} key={i}>
            <span className="genres__item">
              {genre.name}
              {i < topGenres.length - 1 ? "," : "."}&nbsp;
            </span>
          </Link>
        ))}
    </p>
  );
}

MovieGenres.propTypes = {
  genres: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default MovieGenres;
