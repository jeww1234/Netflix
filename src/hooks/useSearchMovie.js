import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = async ({ keyword, page, genre, sortBy }) => {
  if (keyword?.trim()) {
    const res = await api.get(`/search/movie?query=${keyword}&page=${page}`);
    let results = res.data.results;

    // 클라이언트 정렬
    if (sortBy === "vote_average.desc") {
      results = results.sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortBy === "release_date.desc") {
      results = results.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
    }

    if (genre) {
      results = results.filter((movie) =>
        movie.genre_ids.includes(Number(genre))
      );
    }

    return {
      ...res.data,
      results,
      total_pages: 1,
      total_results: results.length,
    };
  }

  // discover API (서버 정렬 가능)
  const genreParam = genre ? `&with_genres=${genre}` : "";
  const sortParam = sortBy ? `&sort_by=${sortBy}` : "";
  const res = await api.get(
    `/discover/movie?page=${page}${genreParam}${sortParam}`
  );
  return res.data;
};

export const useSearchMovieQuery = ({ keyword, page, genre, sortBy }) => {
  return useQuery({
    queryKey: ["movie-search", { keyword, page, genre, sortBy }],
    queryFn: () => fetchSearchMovie({ keyword, page, genre, sortBy }),
    select: (result) => result,
  });
};
