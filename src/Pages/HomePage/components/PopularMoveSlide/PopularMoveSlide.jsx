import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";
import { Alert } from "bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../Common/MovieSlider/MovieSlider";
import {responsive} from "../../../../constants/responsive"

const PopularMoveSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider title="PopularMovies" movies={data.results} responsive={responsive}/>
    </div>
  );
};

export default PopularMoveSlide;
