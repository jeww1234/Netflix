import React from "react";
import "./MovieSlider.style.css"
import useWindowWidth from "../../hooks/useWindowWidth";
import MovieCard from "../../Common//MovieCard/MovieCard";
import Carousel from "react-multi-carousel";

const MovieSlider = ({ movies, title, responsive }) => {
  const width = useWindowWidth();
  const isMobile = width <= 576;

  return (
    <div className="movieSliderBox">
      <h3 className="text-white my-4 ps-3">{title}</h3>
      <Carousel
        infinite={true}
        centerMode={!isMobile}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
        partialVisible={isMobile}
        className="text-white"
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
