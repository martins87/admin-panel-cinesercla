import mongoose, { Schema } from "mongoose";

const faqSchema = new Schema(
  {
    id: String,
    pergunta: String,
    resposta: String,
    cadastro: String,
    cliques: String,
    ordem: String,
    categoria: String,
    principalDuvida: Boolean,
    ordemPrincipalDuvida: String,
    ativa: Boolean,
  },
  { timestamps: true, collection: "faq" }
);

const Faq = mongoose.models.Faq || mongoose.model("Faq", faqSchema);

export default Faq;
