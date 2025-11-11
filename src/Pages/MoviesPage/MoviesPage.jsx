import React from "react";
import "./MoviesPage.style.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../Common/MovieCard/MovieCard"

//네브바 클릭(키워드x -> popularmovie)
//서치(키워드와 관련되 키워드)

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });

  console.log(data, isLoading, isError, error);

  if (isLoading) {
    <h1>Loading.....</h1>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col lg={4} xs={12} key={index}>{<MovieCard movie={movie} />}</Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesPage;
