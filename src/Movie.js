import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <>
      <h3>{title}</h3>
      <h4>{year}</h4>
      <ul>
        {genres.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <p>summary</p>
      <img src={poster}></img>
    </>
  );
}

Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
