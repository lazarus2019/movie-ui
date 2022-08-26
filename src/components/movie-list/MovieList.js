import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "./movie-list.scss";

import tmdbApi, { category } from "../../api/tmdbApi";
import MovieCard from "../movie-card/MovieCard";
import LoadingBox from "../loading-box/LoadingBox";

const MovieList = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (props.type !== "similar") {
        const params = {};

        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
      setLoading(false);
    };
    getList();
  }, [props.category, props.type, props.id]);

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : (
        <div className="movie-list">
          <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <MovieCard item={item} category={props.category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
