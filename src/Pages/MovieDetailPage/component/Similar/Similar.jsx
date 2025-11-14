import React from "react";
import "./Similar.style.css";
import { useMovieSimilarQuery } from "../../../../hooks/useMovieSimilar";
import DetailMovieCard from "../../../../Common//DetailMovieCard//DetailMovieCard";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Similar = ({ id }) => {
  const { data: similar, isLoading, isError, error } = useMovieSimilarQuery(id);
  const [page, setPage] = useState(1);

  console.log("sssssss", similar);
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>{error.message}</div>;
  if (!similar) return <div>로딩 중...</div>;

  return (
    <div className="similar-box">
      <Row>
        <h1 className="p-2" style={{margin:"1rem 0", color:"white"}}>관련 영화</h1>
        {similar?.results.map((movie, index) => (
          <Col
            lg={3}
            md={4}
            sm={6}
            key={index}
            className="p-3 moviePage-card2"
          >
            {<DetailMovieCard movie={movie} />}
          </Col>
        ))}
      </Row>
      {/* 모바일 버전 수정필요! */}
      <div className="d-flex justify-content-center align-items-center p-5">
        <ReactPaginate
          nextLabel="next >"
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={similar?.total_pages} //전체 페이지
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
    </div>
  );
};

export default Similar;
