import { useEffect, useState } from "react";
import "./style.css";

export default function MoviePoster({ posterListMovies }) {
  const [data, setData] = useState({});

  function posterShowTime() {
    let index = 0;

    setInterval(() => {
      if (!posterListMovies) return;
      setData(posterListMovies[index]);

      index++;

      if (16 <= index) {
        index = 0;
      }
    }, 5000);
  }

  function dateFormat() {
    const dataFormatada = new Date(data.release_date).toLocaleDateString(
      "pt-BR",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }
    );

    return dataFormatada;
  }

  useEffect(() => {
    posterShowTime();
  }, [posterListMovies]);

  return (
    <div className="moviePosterBox">
      <div className="moviePosterImage">
        <div
          style={{ backgroundImage: `url(${data.backdrop_path})` }}
          className="posterImage"
        ></div>
      </div>
      <div className="moviePosterData">
        {data !== undefined && (
          <div className={`${!data.show ? "moviePosterItems" : "desable"}`}>
            <div className="moviePosterTitle">
              <h2>{data.title}</h2>
            </div>
            <div className="moviePosterOverview">
              <span>{data.overview}</span>
            </div>
            <div className="voteAverageAndReleaseDate">
              <div className="moviePosterDate">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5525/5525191.png"
                  alt="alert"
                />
                <span>{dateFormat()}</span>
              </div>
              <div className="moviePosterVote">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/heart-4033153-3345796@0.png"
                  alt="like"
                />
                <span>{data.vote_average}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
