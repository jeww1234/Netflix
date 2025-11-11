import React, { useState } from "react";
import "./MoviesPage.style.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MovieCard from "../../Common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";

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

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  console.log(data, isLoading, isError, error);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

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
          <Form.Select aria-label="장르 선택" className="d-flex justify-content-center">
            <option>장르를 선택하세요</option>
            <option value="action">액션</option>
            <option value="comedy">코미디</option>
            <option value="drama">드라마</option>
          </Form.Select>
          {/* tmdb에서 제공하는 장르를를 map한다
          장르의 상태를 저장하는 스테이트 생성
          장르를 클릭하면 그 값으로 상태변경
          변경된 상태를 url에 추가(tmdb의 문법?에 맞게)
          변경된 url로 다시 패치
           */}
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col lg={4} xs={12} key={index}>
                {<MovieCard movie={movie} />}
              </Col>
            ))}
          </Row>
        </Col>
        {/* 모바일 버전 수정필요! */}
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={data?.total_pages} //전체 페이지
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
      </Row>
    </Container>
  );
};

export default MoviesPage;
