import { useEffect, useState } from "react";
import { movieModalApi } from "../api";
import "./style.css";

export default function Modal({ idModal, setIdModal }) {
  const [movieShow, setMovieShow] = useState([]);

  async function modalMovieShow() {
    const movieData = await movieModalApi.get(`/${idModal}?language=pt-BR`);

    const {
      title,
      overview,
      release_date,
      production_companies,
      vote_average,
      backdrop_path,
      genres,
    } = movieData.data;

    setMovieShow({
      title,
      overview,
      releaseDate: release_date,
      productionCompanies: production_companies,
      vote: vote_average,
      image: backdrop_path,
      genres,
    });
  }

  function dateFormat(date) {
    return new Date(date).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  }

  useEffect(() => {
    modalMovieShow();
  }, [idModal]);

  return (
    <div className="modalBlackScreen">
      <div className="modal">
        <img
          onClick={() => setIdModal(0)}
          className="btnClose"
          src={"https://cdn-icons-png.flaticon.com/512/106/106830.png"}
          alt="btn close"
        />
        <div
          style={{ backgroundImage: `url(${movieShow.image})` }}
          className="modalImage"
        ></div>
        <div className="modalDescriptionModal">
          <div className="modalTitle">
            <h1>{movieShow.title}</h1>
          </div>
          <div className="modalOverview">
            <span>{movieShow.overview}</span>
          </div>
          <div className="boxDateAndVote">
            <div className="modalDateAndVote">
              <div className="modalVoteAverage">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/148/148841.png"
                  alt="estrela"
                />
                <span>{movieShow.vote}</span>
              </div>
              <div className="modalDate">
                <span>{dateFormat(movieShow.releaseDate)}</span>
              </div>
            </div>
          </div>
          <div className="modalGenres">
            {movieShow.genres
              ? movieShow.genres.map((genres) => (
                  <span key={genres.id}>{genres.name}</span>
                ))
              : ""}
          </div>

          <div className="modalCompanies">
            {movieShow.productionCompanies
              ? movieShow.productionCompanies.map((company) => (
                  <div key={company.id}>
                    <div
                      style={{
                        backgroundImage: `url(${company.logo_path})`,
                      }}
                    ></div>
                    <span>{company.name}</span>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
