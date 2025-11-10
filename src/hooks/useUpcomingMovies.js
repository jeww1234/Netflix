import { useQuery } from "@tanstack/react-query";
import api from "../utils/api" 

const fetchTopUpcomingMovies=()=>{
    return api.get(`/movie/upcoming`)
}
//useTopRatedMovies
export const useUpcomingMoviesQuery = ()=>{
    return useQuery({
        queryKey:['movie-upcoming'],
        queryFn:fetchTopUpcomingMovies,
        select:(result)=>result.data,
    })
}