import React from "react";
import "./Banner.style.css";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";
import Alert from "react-bootstrap/Alert";
import Trailer from "../Trailer/Trailer";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Banner = () => {
  let loading = true
  const color = "#ffffff"
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("data", data);
  if (isLoading) {
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
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div className="banner">
      <div className="banner-box">
        <Trailer movieId={data?.results?.[0]?.id} />
        <div className="text-white banner-text-area">
          <h1>{data?.results?.[0]?.title}</h1>
          <p>{data?.results?.[0]?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
