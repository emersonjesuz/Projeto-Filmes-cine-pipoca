import { useState, useEffect, useRef } from "react";
import MovieCarousel from "../../main/movieCarousel/movieCarousel";
import MoviePoster from "../../main/moviePoster/moviePoster";
import "./style.css";

import { movieCarouselApi } from "../../api";

export default function Main({ setIdModal }) {
  let filterMoviesData = [];
  const [listMoviesData, setListMovieData] = useState([]);

  const posterListMovies = useRef([]).current;
  const [limitMaxMovieShow, setLimitMaxMovieShow] = useState(6);
  const [limitMinMovieShow, setLimitMinMovieShow] = useState(0);

  async function ApiCarousel() {
    const dataMovie = await movieCarouselApi
      .get("/movie?language=pt-BR&include_adult=false")
      .catch(() => undefined);

    const { results } = dataMovie.data;

    filterMoviesData = [];

    if (posterListMovies.length <= 6) {
      posterListMovies.push(...results);
    }

    for (let index = limitMinMovieShow; index < limitMaxMovieShow; index++) {
      if (filterMoviesData.length > 18) return;

      const filteringMovieWithCopy = filterMoviesData.find((movie) => {
        return movie.id === results[index].id;
      });

      if (filteringMovieWithCopy) return;

      filterMoviesData.push({
        id: !results[index].id ? 0 : results[index].id,
        title: results[index].title,
        overview: results[index].overview,
        image: !results[index].backdrop_path
          ? ""
          : results[index].backdrop_path,
        cover: results[index].poster_path,
        voteAverage: results[index].vote_average,
        releasedDate: results[index].release_date,
        show: true,
      });
    }

    setListMovieData([...filterMoviesData]);
  }

  useEffect(() => {
    ApiCarousel();
  }, [listMoviesData, limitMaxMovieShow, limitMinMovieShow]);

  return (
    <main>
      <MovieCarousel
        listMoviesData={listMoviesData}
        setLimitMaxMovieShow={setLimitMaxMovieShow}
        setLimitMinMovieShow={setLimitMinMovieShow}
        limitMaxMovieShow={limitMaxMovieShow}
        limitMinMovieShow={limitMinMovieShow}
        setIdModal={setIdModal}
      />
      <MoviePoster posterListMovies={posterListMovies} />
    </main>
  );
}
