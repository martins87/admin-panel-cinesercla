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

export const situacaoOpcoes = [
  { value: "pre-venda", label: "Pré Venda" },
  { value: "em-breve", label: "Em Breve" },
  { value: "em-cartaz", label: "Em Cartaz" },
  { value: "encerrado", label: "Encerrado" },
];

export const classificacaoOpcoes = [
  { value: "Não Definida", label: "Não Definida" },
  { value: "Livre", label: "Livre" },
  { value: "10 anos", label: "10 anos" },
  { value: "12 anos", label: "12 anos" },
  { value: "14 anos", label: "14 anos" },
  { value: "16 anos", label: "16 anos" },
  { value: "18 anos", label: "18 anos" },
];

export const generoOpcoes = [
  { value: "Ação", label: "Ação" },
  { value: "Aventura", label: "Aventura" },
  { value: "Comédia", label: "Comédia" },
  { value: "Drama", label: "Drama" },
  { value: "Família", label: "Família" },
  { value: "Ficção Científica", label: "Ficção Científica" },
  { value: "Romance", label: "Romance" },
  { value: "Terror", label: "Terror" },
];

export const simNaoOpcoes = [
  { value: true, label: "Sim" },
  { value: false, label: "Não" },
];
