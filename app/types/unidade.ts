export type Unidade = {
  _id?: string;
  nome: string;
  shopping: string;
  endereco: string;
  estado: string;
  cidade: string;
  urlMapa: string;
  telefone: string;
  numeroSalas: string;
  capacidade: string;
  dataInauguracao: string;
  situacao: string;
  // tiposSala: {
  //   tipoSala: string;
  // }[],
  idIntranet: string;
  idUnidade: string;
  images: {
    fileId: string;
  }[];
};
