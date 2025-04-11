import { create } from "zustand";
import { Movie } from "../types/movie";
import { getMovies } from "../services/movies";

type MovieStore = {
  movieList: Movie[];
  hasFetched: boolean;
  fetchMovieList: () => Promise<void>;
  getMovieById: (id: string) => Movie | undefined;
  updateMovieList: (movie: Movie) => void;
  addMovie: (movie: Movie) => void;
  removeMovie: (id: string) => void;
};

export const useMovieStore = create<MovieStore>((set, get) => ({
  movieList: [],
  hasFetched: false,

  fetchMovieList: async () => {
    if (get().hasFetched) return;

    const list = await getMovies();

    set({ movieList: list, hasFetched: true });
  },

  getMovieById: (id: string) =>
    get().movieList.find((movie) => movie._id === id),

  updateMovieList: (updatedMovie: Movie) => {
    set((state) => ({
      movieList: state.movieList.map((movie) =>
        movie._id === updatedMovie._id ? updatedMovie : movie
      ),
    }));
  },

  addMovie: (newMovie: Movie) => {
    set((state) => ({
      movieList: [...state.movieList, newMovie],
    }));
  },

  removeMovie: (id: string) => {
    set((state) => ({
      movieList: state.movieList.filter((movie) => movie._id !== id),
    }));
  },
}));
