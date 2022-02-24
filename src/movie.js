import { motion } from "framer-motion";
import react from "react";

function movie({ movie }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>{movie.title}</h2>

      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
    </motion.div>
  );
}

export default movie;
