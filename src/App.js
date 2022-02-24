import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./movie";
import Button from "./button";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [trend, setrend] = useState([]);
  const [filter, setfiltered] = useState([]);
  const [Genre, activeGenre] = useState(0);

  useEffect(() => {
    fetchtrnd();
  }, []);

  const fetchtrnd = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0e9cd842d9c20a927ec3ffdfadc76947&language=en-US&page=1"
    );

    const movies = await data.json();
    setrend(movies.results);
    setfiltered(movies.results);
  };

  return (
    <div className="App">
      <Button
        activeGenre={activeGenre}
        Genre={Genre}
        trend={trend}
        setfiltered={setfiltered}
      />
      <motion.div layout className="trend">
        <AnimatePresence>
          {filter.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
