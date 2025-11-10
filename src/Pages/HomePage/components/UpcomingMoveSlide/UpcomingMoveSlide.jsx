import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import { Alert } from "bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../Common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const UpcomingMoveSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  console.log(data);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="UpcomingMovies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMoveSlide;
