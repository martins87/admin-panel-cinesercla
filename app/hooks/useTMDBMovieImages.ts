import { useQuery } from "@tanstack/react-query";
import { getTMDBMovieImages } from "@/app/services/tmdbMovies";

export const useTMDBMovieImages = (id: string) => {
  return useQuery({
    queryKey: ["movie_images", id],
    queryFn: () => getTMDBMovieImages(id),
    staleTime: 60000,
  });
};
