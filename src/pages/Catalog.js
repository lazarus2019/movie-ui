import { useParams } from "react-router-dom";
import PageHeader from "../components/page-header/PageHeader";

import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

function Catalog() {
  const { category, type } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>
          tMovies - {category === cate.movie ? "Movies" : "TV Series"}
        </title>
      </Helmet>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} type={type ? type : null} />
        </div>
      </div>
    </>
  );
}

export default Catalog;
