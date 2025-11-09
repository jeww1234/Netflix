import React from "react";
import "./MovieCard.style.css";
import Badge from "react-bootstrap/Badge";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/w300_and_h450_bestv2" +
          `${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        <div>
          {movie.genre_ids.map((id) => (
            <div className="pe-1" style={{ display: "inline" }}>
              <Badge bg="danger">{id}</Badge>
            </div>
          ))}
        </div>
        <div>
          <div>평점 {movie.vote_average}</div>
          <div>인기도 {movie.popularity}</div>
          <div>{movie.adult ? "18세 이용가" : "전체 이용가"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
