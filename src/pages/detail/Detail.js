import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./detail.scss";

import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from "../../components/movie-list/MovieList";
import { Helmet } from "react-helmet-async";
import getImage from "../../utils/getImage";
import LoadingBox from "../../components/loading-box/LoadingBox";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  const background = getImage(
    item?.backdrop_path ?? item?.poster_path ?? false,
    apiConfig.originalImage,
    true
  );

  const poster = getImage(
    item?.poster_path ?? item?.backdrop_path ?? false,
    apiConfig.w500Image
  );

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      console.log(response);
      window.scrollTo(0, 0);
    };
    getDetail();
    setLoading(false);
  }, [category, id]);

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : (
        item && (
          <>
            <Helmet>
              <title>{item.title || item.name} - tMovies</title>
            </Helmet>
            <div
              className="banner"
              style={{
                backgroundImage: `url(${background})`,
              }}
            ></div>
            <div className="movie-content mb-3 container">
              <div className="movie-content__poster">
                <div
                  className="movie-content__poster__img"
                  style={{
                    backgroundImage: `url(${poster})`,
                  }}
                ></div>
              </div>
              <div className="movie-content__info">
                <h1 className="title">{item.title || item.name}</h1>
                <div className="genres">
                  {item.genres &&
                    item.genres.slice(0, 5).map((genre, i) => (
                      <Link to={`/${category}/g/${genre.id}`} key={i}>
                        <span className="genres__item">{genre.name}</span>
                      </Link>
                    ))}
                </div>
                <div className="overview">{item.overview}</div>
                <div className="cast">
                  <div className="section__header mb-2">
                    <h2>Casts</h2>
                  </div>
                  <CastList id={item.id} />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="section mb-3">
                <VideoList id={item.id} />
              </div>
              <div className="section mb-3">
                <div className="section__header mb-2">
                  <h2>Similar</h2>
                </div>
                <MovieList category={category} type="similar" id={item.id} />
              </div>
            </div>
          </>
        )
      )}
    </>
  );
}

export default Detail;
