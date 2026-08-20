import React from "react";
import './App.css';
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {

  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (

    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movie.map((curMovie) => {
          const { imdbID, Title, Poster, Year, Type } = curMovie;
const movieName = Title.substring(0, 15);

          return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className="card">
              <div className="card-info">
                <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                <img
                  src={Poster === "N/A" ? "https://placehold.co/420x630/2d3a3f/f6f3ed?text=No+Poster" : Poster}
                  alt={`${Title} poster`}
                  loading="lazy"
                />
                <p className="card-meta">{Year} · {Type}</p>
              </div>
            </div>
          </NavLink>
          );


        })}</div>
    </section>



  )
}
export default Movies;