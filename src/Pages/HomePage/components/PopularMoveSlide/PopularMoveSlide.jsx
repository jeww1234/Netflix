import React from "react";
import "./PopularMoveSlide.style.css";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";
import { Alert } from "bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard"
import useWindowWidth  from "../../../../hooks/useWindowWidth";

const PopularMoveSlide = () => {
  const width = useWindowWidth();
  const isMobile = width <= 576;
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data)

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 1980, min: 1024 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 567 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <h3 className="text-white mt-5 ps-3">Popular Movies</h3>
      <Carousel
        infinite={true}
        centerMode={!isMobile}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
        partialVisible={isMobile}
        className="text-white"
      >
        {data.results.map((movie, index)=><MovieCard movie={movie} key={index}/>)}
      </Carousel>
      ;
    </div>
  );
};

export default PopularMoveSlide;
