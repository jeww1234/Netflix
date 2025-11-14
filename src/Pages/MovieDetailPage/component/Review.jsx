import React from "react";
import { useMovieReviewQuery } from "../../../hooks/useMovieReview";

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
        <div>
          <h3>{review.author}</h3>
          <h3>{review.content}</h3>
        </div>
      ))}
    </div>
  );
};

export default Review;
