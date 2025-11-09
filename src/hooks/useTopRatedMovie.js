import { useQuery } from "@tanstack/react-query";
import api from "../utils/api" 

const fetchTopRatedMovies=()=>{
    return api.get(`/movie/top_rated`)
}
//useTopRatedMovies
export const useTopRatedMoviesQuery = ()=>{
    return useQuery({
        queryKey:['movie-top'],
        queryFn:fetchTopRatedMovies,
        select:(result)=>result.data,
    })
}