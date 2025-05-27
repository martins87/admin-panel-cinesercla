import mongoose, { Schema } from "mongoose";

const bannerSchema = new Schema(
  {
    pagina: String,
    secao: String,
    tipoConteudo: String,
    ordem: String,
    unidadesParticipantes: [
      {
        unidadeId: { type: String, required: true },
      },
    ],
    idFilme: String,
    situacao: String,
    dataInicio: String,
    dataFim: String,
    nome: String,
    link: String,
    // descricao: String,
    images: [
      {
        fileId: { type: String, required: true },
      },
    ],
  },
  { timestamps: true, collection: "banner" }
);

const Banner = mongoose.models.Banner || mongoose.model("Banner", bannerSchema);

export default Banner;
