import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = async ({ keyword, page, genre }) => {
  if (keyword?.trim()) {
    const res = await api.get(`/search/movie?query=${keyword}&page=${page}`);
    console.log("response", res);
    if (genre) {
      const filtered = res.data.results.filter((movie) =>
        movie.genre_ids.includes(Number(genre))
      );
      console.log("filtered", filtered);
      return {
        ...res.data,
        results: filtered,
        total_pages: 1, // ✅ 필터링된 결과 기준으로 페이지 수 고정
        total_results: filtered.length,
      };
    }
    return res.data;
  } else if (genre) {
    const res = await api.get(`/discover/movie?
      with_genres=${genre}&page=${page}`);
    return res.data;
  } else {
    const res = await api.get(`/movie/popular?page=${page}`);
    return res.data;
  }
};

export const useSearchMovieQuery = ({ keyword, page, genre }) => {
  return useQuery({
    queryKey: ["movie-search", { keyword, page, genre }],
    queryFn: () => fetchSearchMovie({ keyword, page, genre }),
    select: (result) => result,
  });
};
