import { useState } from "react";
import "./App.css";
import Footer from "./component/layout/footer/footer";
import Header from "./component/layout/header/header";
import Main from "./component/layout/main";
import Modal from "./component/modal";
import SearchMovie from "./component/seachMovie/searchMovie";

function App() {
  const [checkMovie, setCheckMovie] = useState(false);
  const [foundMovies, setFoundMovies] = useState("");
  const [idModal, setIdModal] = useState(0);

  return (
    <div className="container">
      <Header
        setCheckMovie={setCheckMovie}
        setFoundMovies={setFoundMovies}
        foundMovies={foundMovies}
      />
      {checkMovie ? (
        <SearchMovie
          foundMovies={foundMovies}
          setFoundMovies={setFoundMovies}
          setCheckMovie={setCheckMovie}
          setIdModal={setIdModal}
        />
      ) : (
        <Main setIdModal={setIdModal} />
      )}
      <Footer />
      {idModal && <Modal idModal={idModal} setIdModal={setIdModal} />}
    </div>
  );
}

export default App;
