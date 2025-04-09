export interface Movie {
  title: string;
  originalTitle: string;
  releaseDate: string;
  situacao: string;
  classificacao: string;
  ordem: string;
  tags: string[];
  genre: string[];
  diretor: string;
  runtime: string;
  distribuidora: string;
  cast: string[];
  trailerDublado: string;
  trailerLegendado: string;
  overview: string;
  ativo: boolean;
  imagens: string[];
  posterPath: string;
  backdropPath: string;
}

export const situacaoOpcoes = [
  { value: "Em Breve", label: "Em Breve" },
  { value: "Em Cartaz", label: "Em Cartaz" },
  { value: "Encerrado", label: "Encerrado" },
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
