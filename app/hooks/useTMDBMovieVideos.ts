import { useQuery } from "@tanstack/react-query";
import { getTMDBMovieVideos } from "@/app/services/tmdbMovies";

export const useTMDBMovieVideos = (id: string) => {
  return useQuery({
    queryKey: ["movie_videos", id],
    queryFn: () => getTMDBMovieVideos(id),
    staleTime: 60000,
  });
};
