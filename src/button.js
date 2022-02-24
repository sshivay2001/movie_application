import react, { useEffect } from "react";

function Button({ activeGenre, Genre, setfiltered, trend }) {
  useEffect(() => {
    if (Genre === 0) {
      setfiltered(trend);
      return;
    }
    const filtered = trend.filter((movie) => movie.genre_ids.includes(Genre));
    setfiltered(filtered);
  }, [Genre]);

  return (
    <div className="filter-button">
      <button className="btn-1" onClick={() => activeGenre(0)}>
        All
      </button>
      <button className="btn-2" onClick={() => activeGenre(28)}>
        Action
      </button>
      <button className="btn-2" onClick={() => activeGenre(10751)}>
        Trending
      </button>
    </div>
  );
}

export default Button;
