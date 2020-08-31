import React, { useState, useEffect } from "react";
import axios, { imageBaseUrl } from "../../axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow, rowType, handleRowTypes, trailerUrl, handleTrailerUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await axios.get(fetchUrl);
      const { data: { results } } = response;
      setMovies(results);
    };
    fetchMovieData();
  }, [fetchUrl, trailerUrl, rowType]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  }

  const handleClick = (movie) => {
    movieTrailer(movie?.title || movie?.name)
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        handleTrailerUrl(urlParams.get('v'));
        handleRowTypes(title);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            key={movie.id}
            src={`${imageBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__largePosters"}`}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && rowType === title && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
