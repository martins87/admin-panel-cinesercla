import { useQuery } from "@tanstack/react-query";
import { getTMDBMovieCast } from "@/app/services/tmdbMovies";

export const useTMDBMovieCast = (id: string) => {
  return useQuery({
    queryKey: ["movie_cast", id],
    queryFn: () => getTMDBMovieCast(id),
    staleTime: 60000,
  });
};
