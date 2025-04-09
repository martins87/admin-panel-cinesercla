import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/app/services/movies";
import { encodeQueryString } from "@/lib/utils";

export const useMovies = (query: string, enabled: boolean = false) => {
  const encodedQuery = encodeQueryString(query);

  return useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(encodedQuery),
    staleTime: 60000,
    enabled: !!query && enabled,
  });
};
