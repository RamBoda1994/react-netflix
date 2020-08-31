import React, { useState } from "react";
import "./App.css";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import Navbar from './components/Navbar/Navbar';
import requests from "./request";

function App() {

  const [rowType, setRowType] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');

  const handleRowTypes = (value) => {
    setRowType(value);
  }

  const handleTrailerUrl = (trailer) => {
    setTrailerUrl(trailer);
  }

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        trailerUrl={trailerUrl}
        rowType={rowType}
        handleRowTypes={handleRowTypes}
        handleTrailerUrl={handleTrailerUrl}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        trailerUrl={trailerUrl}
        rowType={rowType}
        handleTrailerUrl={handleTrailerUrl}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        trailerUrl={trailerUrl}
        rowType={rowType}
        setRowType={setRowType}
        handleTrailerUrl={handleTrailerUrl}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        trailerUrl={trailerUrl}
        rowType={rowType}
        handleRowTypes={handleRowTypes}
        handleTrailerUrl={handleTrailerUrl}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        trailerUrl={trailerUrl}
        rowType={rowType}
        handleRowTypes={handleRowTypes}
        handleTrailerUrl={handleTrailerUrl}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchRomanticMovies}
        trailerUrl={trailerUrl}
        rowType={rowType}
        handleRowTypes={handleRowTypes}
        handleTrailerUrl={handleTrailerUrl}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchTrending}
        trailerUrl={trailerUrl}
        rowType={rowType}
        handleRowTypes={handleRowTypes}
        handleTrailerUrl={handleTrailerUrl}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        trailerUrl={trailerUrl}
        rowType={rowType}
        handleRowTypes={handleRowTypes}
        handleTrailerUrl={handleTrailerUrl}
      />
    </div>
  );
}

export default App;
