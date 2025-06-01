import mongoose, { Schema } from "mongoose";

const unidadeSchema = new Schema(
  {
    nome: String,
    shopping: String,
    endereco: String,
    estado: String,
    cidade: String,
    urlMapa: String,
    telefone: String,
    numeroSalas: String,
    capacidade: String,
    dataInauguracao: String,
    situacao: String,
    // tiposSala: [
    //   {
    //     tipoSala: { type: String, required: true },
    //   },
    // ],
    idIntranet: String,
    idUnidade: String,
    images: [
      {
        fileId: { type: String, required: true },
      },
    ],
  },
  { timestamps: true, collection: "unidade" }
);

const Unidade =
  mongoose.models.Unidade || mongoose.model("Unidade", unidadeSchema);

export default Unidade;
