import React from "react";
import "./DetailMovieCard.style.css";
import Badge from "react-bootstrap/Badge";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate()

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id)
      return genreObj.name
    })
    return genreNameList
  };

  const goToDetailPage =(movieId)=>{
    navigate(`/movies/${movieId}`)
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/w300_and_h450_bestv2" +
          `${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
      onClick={()=>goToDetailPage(movie.id)}
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
          <div>평점 {movie?.vote_average}</div>
          <div>인기도 {movie?.popularity}</div>
          <div>개봉일 {movie?.release_date}</div>
          <div>{movie.adult ? "18세 이용가" : "전체 이용가"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
