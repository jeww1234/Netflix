import React, { useState } from "react";
import "./MoviesPage.style.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import MovieCard from "../../Common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
//네브바 클릭(키워드x -> popularmovie)
//서치(키워드와 관련되 키워드)

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch+
const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const [genre, setGenre] = useState("");
  const [sortBy, setSortBy] = useState("");


  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
    genre,
    sortBy,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    console.log("genre", genre);
  };

  const { data: genreData } = useMovieGenreQuery();

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
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  const handleGenre = (event) => {
    setGenre(event.target.value);
    setPage(1);
    console.log("Gggg", event.target.genre);
  };

  const handleSort =(event)=>{
    setSortBy(event.target.value)
    setPage(1)
  }

  return (
    <Container>
      <Row className="moviePage-area">
        <Col lg={3} xs={12}>
          <Row className="moviePage-option-area">
            <Col>
              <Form.Select
                aria-label="장르 선택"
                className="d-flex justify-content-center mb-4"
                onChange={handleGenre}
              >
                <option disabled={true} selected>
                  장르를 선택하세요
                </option>
                {genreData?.map((genre, index) => (
                  <option value={genre.id} key={index}>
                    {genre.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Select aria-label="장르 선택" onChange={handleSort} value={sortBy}>
                <option disabled={true} value="">
                  정렬
                </option>
                <option value="vote_average.desc">평점 높은 순</option>
                <option value="release_date.desc">최신 개봉 순</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col lg={9} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col
                lg={4}
                sm={6}
                xs={12}
                key={index}
                className="pe-2 pb-4 moviePage-card"
              >
                {<MovieCard movie={movie} />}
              </Col>
            ))}
          </Row>
          {/* 모바일 버전 수정필요! */}
          <div className="d-flex justify-content-center align-items-center p-5">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={500} //전체 페이지
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page - 1}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesPage;
