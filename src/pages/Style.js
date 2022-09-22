import React from "react";
import MovieCard from "../components/movie-card/MovieCard";

const item = {
  adult: false,
  backdrop_path: "/A2XhlMUimRDViZDuJPeDtaJoHmT.jpg",
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
  ],
  homepage:
    "https://www.disneyplus.com/movies/welcome-to-the-club/1G8E1va2iBHY",
  id: 1015602,
  imdb_id: "tt21983602",
  original_language: "en",
  original_title: "Welcome to the Club",
  overview:
    "Heart set on becoming a princess, Lisa Simpson is surprised to learn being bad might be more fun.",
  popularity: 1413.475,
  poster_path: "/kxB9E6fo0ycHzd13oOTHmGa5Njd.jpg",
  production_companies: [
    {
      id: 18,
      logo_path: "/uqhagSwM7NAkQWVCQhKTyoqF8XH.png",
      name: "Gracie Films",
      origin_country: "US",
    },
    {
      id: 21659,
      logo_path: "/uJhjhEJEPDoCSSOci44tYoe5BjZ.png",
      name: "20th Television",
      origin_country: "US",
    },
    {
      id: 154887,
      logo_path: null,
      name: "20th Television Animation",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2022-09-08",
  revenue: 0,
  runtime: 4,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "It’s not easy being mean… or is it?",
  title: "Welcome to the Club",
  video: false,
  vote_average: 6.694,
  vote_count: 62,
};

function Style(props) {
  return <MovieCard item={item} category="movie" />;
}

export default Style;
