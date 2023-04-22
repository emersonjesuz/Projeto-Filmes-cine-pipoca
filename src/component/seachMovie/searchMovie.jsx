import { useEffect, useState } from "react";
import { movieSeachApi } from "../api";
import "./style.css";

export default function SearchMovie({
  foundMovies,
  setFoundMovies,
  setCheckMovie,
  setIdModal,
}) {
  const [movieData, setMovieData] = useState([]);
  const seachList = new Set();

  async function ApiSeach() {
    const surveyData = await movieSeachApi
      .get(`/movie?language=pt-BR&include_adult=false&query=${foundMovies}`)
      .catch(() => undefined);

    const { results } = surveyData.data;

    for (let result of results) {
      if (seachList.size > results.length) return;
      seachList.add(result);
    }

    setMovieData([...seachList]);
  }

  useEffect(() => {
    ApiSeach();
  }, [foundMovies]);

  return (
    <div className="seachContainerShow">
      <div
        className="btnReturn"
        onClick={() => {
          setCheckMovie(false);
          setFoundMovies("");
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1280/1280115.png"
          alt="btn voltar"
        />
      </div>
      <div className="seachBoxMovie">
        {movieData.map((movie) => (
          <div
            onClick={() => setIdModal(movie.id)}
            key={movie.id}
            className="foundMovie"
          >
            <img src={movie.poster_path} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
}
