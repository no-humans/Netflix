import React from "react";
import { useEffect, useState } from "react";
import instance from "./baseUrl";
import axios from "axios";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [movies, SetMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  // function to call api
  async function getData() {
    const result = await instance.get(fetchUrl);
    // console.log(result.data.results);
    SetMovies(result.data.results);
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(movies);

  return (
    <div className="Otitle">
      <h1>{title}</h1>
      <div className="Omovie">
        {movies.map((movie) => (
          <img className="Imovie"
            src={`${base_url}${movie.backdrop_path}`}
            alt={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
