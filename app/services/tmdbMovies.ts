import { TMDBVideo } from "../types/tmdbVideo";
import { TMDBCast } from "../types/tmdbCast";

const TMDB_API_BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_BASE_URL;
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (!TMDB_API_BASE_URL) {
  throw new Error("Please define the TMDB_API_BASE_URL environment variable");
}

if (!TMDB_API_KEY) {
  throw new Error("Please define the TMDB_API_KEY environment variable");
}

export const getTMDBMovies = async (query: string) => {
  const response = await fetch(
    `${TMDB_API_BASE_URL}search/movie?query=${query}&api_key=${TMDB_API_KEY}&language=pt-BR`
  );

  // TODO threat errors
  const data = await response.json();

  // transform data if necessary
  return data;
};

export const getTMDBMovie = async (id: string) => {
  const response = await fetch(
    `${TMDB_API_BASE_URL}movie/${id}?api_key=${TMDB_API_KEY}&language=pt-BR`
  );

  // TODO threat errors
  const data = await response.json();

  return data;
};

export const getTMDBMovieImages = async (id: string) => {
  const response = await fetch(
    `${TMDB_API_BASE_URL}movie/${id}/images?api_key=${TMDB_API_KEY}`
  );

  // TODO threat errors
  const data = await response.json();

  return data;
};

export const getTMDBMovieVideos = async (id: string) => {
  const response = await fetch(
    `${TMDB_API_BASE_URL}movie/${id}/videos?api_key=${TMDB_API_KEY}&language=pt-BR`
  );

  // TODO threat errors
  const data = await response.json();

  const videos = data.results.filter(
    (video: TMDBVideo) => video.type === "Trailer" && video.site === "YouTube"
  );

  return videos;
};

export const getTMDBMovieCast = async (id: string) => {
  const response = await fetch(
    `${TMDB_API_BASE_URL}movie/${id}/credits?api_key=${TMDB_API_KEY}`
  );

  // TODO threat errors
  const data = await response.json();

  const castList = data.cast
    .filter((person: TMDBCast) => person.known_for_department === "Acting")
    .map((person: TMDBCast) => person.name)
    .slice(0, 6);

  return castList;
};
