import { useQuery } from "@tanstack/react-query";
import { getMovie } from "@/app/services/movies";

export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovie(id),
    staleTime: 60000,
  });
};
