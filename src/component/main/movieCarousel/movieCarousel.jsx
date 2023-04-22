import "./style.css";

import btnIconLeft from "../../../assets/arrow-left-light.svg";
import btnIconRight from "../../../assets/arrow-right-light.svg";

export default function MovieCarousel({
  listMoviesData,
  setLimitMaxMovieShow,
  setLimitMinMovieShow,
  limitMaxMovieShow,
  limitMinMovieShow,
  setIdModal,
}) {
  function pagingToLeft() {
    if (limitMaxMovieShow <= 6) {
      setLimitMaxMovieShow(18);
      setLimitMinMovieShow(12);

      return;
    }

    setLimitMaxMovieShow(limitMaxMovieShow - 6);
    setLimitMinMovieShow(limitMinMovieShow - 6);
  }

  function pagingToRight() {
    setLimitMaxMovieShow(limitMaxMovieShow + 6);
    setLimitMinMovieShow(limitMinMovieShow + 6);

    if (limitMaxMovieShow >= 18) {
      setLimitMaxMovieShow(6);
      setLimitMinMovieShow(0);
    }
  }

  return (
    <div className="carouselBox">
      <div className="btnLeft">
        <img src={btnIconLeft} alt="btn left" onClick={() => pagingToLeft()} />
      </div>
      <div className="moviesBox">
        {listMoviesData.map((moviesData) => (
          <div
            onClick={() => setIdModal(moviesData.id)}
            className={"cardMovie"}
            key={moviesData.id}
          >
            <img src={moviesData.cover} alt="movieCard" />
          </div>
        ))}
      </div>
      <div className="btnRight">
        <img
          src={btnIconRight}
          alt=" btn right"
          onClick={() => pagingToRight()}
        />
      </div>
    </div>
  );
}
