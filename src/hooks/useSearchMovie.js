import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = async ({ keyword, page, genre }) => {
  if (keyword) {
    const res = await api.get(`/search/movie?query=${keyword}&page=${page}`);
    console.log("response", res);
    if (genre) {
      const filtered = res.data.results.filter((movie) =>
        movie.genre_ids.includes(Number(genre))
      );
      console.log("filtered", filtered);
      return { ...res.data, results: filtered };
    }
    
    return res;
    
  } else if (genre) {
    return api.get(`/discover/movie?with_genres=${genre}&page=${page}`);
  } else {
    return api.get(`/movie/popular?page=${page}`);
  }
};

export const useSearchMovieQuery = ({ keyword, page, genre }) => {
  return useQuery({
    queryKey: ["movie-search", { keyword, page, genre }],
    queryFn: () => fetchSearchMovie({ keyword, page, genre }),
    select: (result) => result,
  });
};
