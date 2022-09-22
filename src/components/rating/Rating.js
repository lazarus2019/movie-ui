import React from "react";
import PropTypes from "prop-types";

import "./rating.scss";

function Rating(props) {
  const { average, count } = props;
  return (
    <div className="rating">
      <div className="rating__stars">
        {Array.from(new Array(10)).map((x, index) => (
          <i
            key={index}
            className={`bx bxs-star rating__stars__icon ${
              index < average - 1 ? "rating__stars__icon__active" : ""
            }`}
          />
        ))}
      </div>
      <span className="rating__info">{`(${average.toFixed(1)}/${count})`}</span>
    </div>
  );
}

Rating.propTypes = {
  average: PropTypes.number,
  count: PropTypes.number,
};

export default Rating;
