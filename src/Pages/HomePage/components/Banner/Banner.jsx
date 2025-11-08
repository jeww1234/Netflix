import React from "react";
import "./Banner.style.css";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";
import Alert from "react-bootstrap/Alert";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("data", data);
  if (isLoading) {
    <h1>Loading.....</h1>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }

  const backgroundImageUrl = `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results?.[2]?.poster_path}`;

  return (
    <div
      style={{
        backgroundImage:`url(${backgroundImageUrl})`
      }}
      className="banner"
    >
      <div className="text-white banner-text-area">
        <h1>{data?.results?.[2]?.title}</h1>
        <p>{data?.results?.[2]?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
