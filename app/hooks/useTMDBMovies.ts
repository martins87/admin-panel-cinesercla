import { useQuery } from "@tanstack/react-query";
import { getTMDBMovies } from "@/app/services/tmdbMovies";
import { encodeQueryString } from "@/lib/utils";

export const useTMDBMovies = (query: string, enabled: boolean = false) => {
  const encodedQuery = encodeQueryString(query);

  return useQuery({
    queryKey: ["movies", encodedQuery],
    queryFn: () => getTMDBMovies(encodedQuery),
    staleTime: 60000,
    enabled: !!query && enabled,
  });
};
