import "./style.css";

export default function Header({ setCheckMovie, setFoundMovies, foundMovies }) {
  return (
    <header>
      <div className="boxHeaderLogo">
        <h1>cine Pipoca</h1>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/2797/2797990.png"}
          alt="logo"
        />
      </div>
      <div className="boxHeaderInput">
        <input
          type="text"
          placeholder="Pesquisar filme"
          value={foundMovies}
          onClick={() => setCheckMovie(true)}
          onChange={(e) => setFoundMovies(e.target.value)}
        />
      </div>
    </header>
  );
}
