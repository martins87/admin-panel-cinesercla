import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
  {
    categoria: String,
    nome: String,
    preco: String,
    imageFileId: String,
  },
  { timestamps: true, collection: "bomboniere" }
);

const Bomboniere =
  mongoose.models.Bomboniere || mongoose.model("Bomboniere", movieSchema);

export default Bomboniere;
