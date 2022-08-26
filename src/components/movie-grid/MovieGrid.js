import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./movie-grid.scss";

import Input from "../input/Input";
import MovieCard from "../movie-card/MovieCard";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
import Button, { OutlineButton } from "../button/Button";
import LoadingBox from "../loading-box/LoadingBox";

function MovieGrid(props) {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    setLoading(true);
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        let type;
        switch (props.category) {
          case category.movie:
            type = props.type ? props.type : movieType.upcoming;
            response = await tmdbApi.getMoviesList(type, {
              params,
            });
            break;
          default:
            type = props.type ? props.type : tvType.popular;
            response = await tmdbApi.getTvList(type, { params });
            break;
        }
      } else {
        const params = { query: keyword };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
      setLoading(false);
    };
    getList();
  }, [props.category, keyword, props.type]);

  const loadMore = async () => {
    setLoadingMore(true);
    let response = null;

    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      let type;
      switch (props.category) {
        case category.movie:
          type = props.type ? props.type : movieType.upcoming;
          response = await tmdbApi.getMoviesList(type, {
            params,
          });
          break;
        default:
          type = props.type ? props.type : tvType.popular;
          response = await tmdbApi.getTvList(type, { params });
          break;
      }
    } else {
      const params = { page: page + 1, query: keyword };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
    setLoadingMore(false);
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword} />
      </div>
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          <div className="movie-grid">
            {items.map((item, i) => (
              <MovieCard key={i} item={item} category={props.category} />
            ))}
          </div>
          {page < totalPage ? (
            loadingMore ? (
              <LoadingBox />
            ) : (
              <div className="movie-grid__loadmore">
                <OutlineButton className="small" onClick={loadMore}>
                  Load More
                </OutlineButton>
              </div>
            )
          ) : null}
        </>
      )}
    </>
  );
}

const MovieSearch = (props) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category[props.category]}/search/${keyword}`);
    }
  }, [keyword, props.category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };

    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};

export default MovieGrid;
