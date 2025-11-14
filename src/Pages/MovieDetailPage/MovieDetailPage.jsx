import React from "react";
import "./MovieDetailPage.style.css";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: detail, isLoading, isError, error } = useMovieDetailQuery(id);

  console.log("ddddddttttttt",detail)

  let loading = true;
  const color = "#ffffff";
  if (isLoading)
    return (
      <div
        className="sweet-loading"
        style={{ width: "100%", height: "100vh", zIndex: "1" }}
      >
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );

  if (isError) return <div>{error.message}</div>;
  if (!detail) return <div>로딩 중...</div>;

  return (
    <div className="detail-movie-container">
      <div className="detail-movie-img">
        <img
          src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
          alt={detail.title}
        />
      </div>
      <div className="detail-movie-info">
        <h1>{detail.title}</h1>
        <p>카테고리</p>
        <p>부제목?</p>
        <p>상영시간</p>
        <p>개봉일</p>
        <p>이용가</p>
        <p>평점</p>
        <p>설명</p>
        <p>트레일러</p>
        <p>리뷰</p>
        <p>관련 영화</p>
      </div>
    </div>
  );
};

export default MovieDetailPage;
