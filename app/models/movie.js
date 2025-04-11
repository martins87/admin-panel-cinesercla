import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
  {
    tmdbId: Number,
    cadastro: String,
    cliques: String,
    ordem: String,
    categoria: String,
    principalDuvida: Boolean,
    ordemPrincipalDuvida: String,
    ativo: Boolean,
    adult: Boolean,
    backdrop_path: String,
    genres: String, // Salvar como string
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    // production_companies: String,
    release_date: String,
    runtime: Number,
    title: String,
    vote_average: Number,
    vote_count: Number,
  },
  { timestamps: true, collection: "movie" }
);

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;
