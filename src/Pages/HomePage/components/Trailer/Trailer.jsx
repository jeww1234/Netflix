import React from "react";
import "./Trailer.style.css";
import { useMovieTrailerQuery } from "../../../../hooks/useMovieTrailer";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Trailer = ({ movieId }) => {
  const { data: trailerData, isLoading, error } = useMovieTrailerQuery(movieId);

  let loading = true;
  const color = "#ffffff";

  if (isLoading)
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
  if (error) return <div>{error.message}</div>;

  const trailer = trailerData?.results?.find(
    (video) => video.type === "Trailer"
  );

  if (!trailer) return <div>No trailer available</div>;

  console.log("Found trailer:", trailer);

  return (
    <div className="iframe-box">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Movie Trailer"
      />
    </div>
  );
};

export default Trailer;
