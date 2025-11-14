import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieSimilar = (id) => {
  return api.get(`/movie/${id}/similar?language=en-US&page=1`);
};

export const useMovieSimilarQuery = (id) => {
  return useQuery({
    queryKey: ["movie-similar", id],
    queryFn:()=> fetchMovieSimilar(id),
    select: (result) => result.data,
    staleTime: 30000,
  });
};

