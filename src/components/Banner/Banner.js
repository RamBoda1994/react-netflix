import React, { useState, useEffect } from "react";
import axios, { imageBaseUrl } from "../../axios";
import requests from "../../request";
import "./Banner.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function truncate(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + "..." : string;
}

function Banner() {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const { data: { results } } = response;
      setMovie(results[Math.floor(Math.random() * (results.length - 1))]);
    };
    fetchMovieData();
  }, []);

  const handlePlayBtnClick = movie => {
    movieTrailer(movie?.title || movie?.name)
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch(err => console.log(err));
  }

  const opts = {
    height: "480",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  }

  return trailerUrl ?
    (<YouTube
      videoId={trailerUrl}
      opts={opts}
    />) :
    (
      <header className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${imageBaseUrl}/${movie?.backdrop_path})`,
          backgroundPosition: "center center"
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner__buttons">
            <button
              className="banner__button"
              onClick={() => handlePlayBtnClick(movie)}
            >
              Play
          </button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">{truncate(movie.overview, 150)}</h1>
        </div>
        <div className="banner__fadeBottom" />
      </header>
    );
}

export default Banner;
