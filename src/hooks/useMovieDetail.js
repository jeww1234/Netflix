import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = (id) => {
  return api.get(`/movie/${id}`);
};

export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: ["movie-genre", id],
    queryFn:()=> fetchMovieDetail(id),
    select: (result) => result.data,
    staleTime: 30000,
  });
};
