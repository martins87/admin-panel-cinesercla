import { Schedule } from "./schedule";

export type Movie = {
  _id?: string;
  tmdbId: number;
  cadastro: string;
  ativo: boolean;
  adult?: boolean;
  backdrop_path: string;
  genres: string; // Salvar como string
  original_language?: string;
  original_title: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  // production_companies: string,
  release_date: string;
  runtime: number;
  situacao: string;
  title: string;
  vote_average?: number;
  vote_count?: number;
  trailers: {
    name: string;
    key: string;
  }[];
  cast: string;
  idFilme: string;
};

export type MovieSchedule = {
  idFilme: string;
  scheduleList: Schedule[];
};
