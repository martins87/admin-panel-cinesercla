export type Banner = {
  _id?: string;
  pagina: string;
  secao: string;
  tipoConteudo: string;
  ordem: string;
  unidadesParticipantes: {
    unidadeId: string;
  }[];
  idFilme: string;
  situacao: string;
  dataInicio: string;
  dataFim: string;
  nome: string;
  link: string;
  // descricao: string;
  images: {
    fileId: string;
  }[];
};
