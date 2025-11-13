import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieTrailer = async (movieId) => {
  return await api.get(`/movie/${movieId}/videos?language=en-US`);
};

export const useMovieTrailerQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-trailer", movieId],
    queryFn: () => fetchMovieTrailer(movieId),
    select: (result) => result.data,
    enabled: !!movieId,
  });
};
