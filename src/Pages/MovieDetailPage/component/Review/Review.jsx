import React from "react";
import { useMovieReviewQuery } from "../../../../hooks/useMovieReview";
import "./Review.style.css"
const Review = ({ id }) => {
  const {
    data: review,
    isLoading2,
    isError2,
    error2,
  } = useMovieReviewQuery(id);
  console.log("rrrrrrrrr", review);
  if (isLoading2) return <div>로딩 중...</div>;
  if (isError2) return <div>{error2.message}</div>;
  if (!review) return <div>로딩 중...</div>;
  return (
    <div>
      {review.results.map((review) => (
        <div className="review-box">
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
