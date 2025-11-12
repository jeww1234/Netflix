import { useQuery } from "@tanstack/react-query";
import api from "../utils/api" 

const fetchPopularMovies= async()=>{
    const res = await api.get(`/movie/popular`)
    return res.data
}

export const usePopularMoviesQuery = ()=>{
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:fetchPopularMovies,
        select:(result)=>result,
    })
}