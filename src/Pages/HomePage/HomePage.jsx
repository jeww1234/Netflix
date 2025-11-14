import React from "react";
import "./HomePage.style.css";
import Banner from "./components/Banner/Banner";
import PopularMoveSlide from "./components/PopularMoveSlide/PopularMoveSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMoveSlide from "./components/UpcomingMoveSlide/UpcomingMoveSlide";
import Trailer from "./components/Trailer/Trailer";

//베너 파퓰러 무비를 들고와서 첫 번째 아이템의 이미지를 보여주자
//popular
//top rated
//upcoming

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="slide-box">
        <PopularMoveSlide />
        <TopRatedMovieSlide />
        <UpcomingMoveSlide />
      </div>
    </div>
  );
};

export default Homepage;
