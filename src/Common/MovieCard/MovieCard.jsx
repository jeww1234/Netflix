import React from "react";
import "./MovieCard.style.css";
import Badge from "react-bootstrap/Badge";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  console.log("ddd", genreData);

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id)
      return genreObj.name
    })
    return genreNameList
  };

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
          {showGenre(movie.genre_ids).map((item, id) => (
            <div key={id} className="pe-1" style={{ display: "inline" }}>
              <Badge bg="danger">{item}</Badge>
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
