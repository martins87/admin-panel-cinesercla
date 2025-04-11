import { useQuery } from "@tanstack/react-query";
import { getTMDBMovie } from "@/app/services/tmdbMovies";

export const useTMDBMovie = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getTMDBMovie(id),
    staleTime: 60000,
  });
};
