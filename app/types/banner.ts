import { StaticImageData } from "next/image";

export type Banner = {
  _id: string;
  nome: string;
  pagina: string;
  secao: string;
  ordem: string;
  image: StaticImageData | string;
};
