import mongoose, { Schema } from "mongoose";

export const FilmeSchema = new Schema ({
    nome: String,
    genero: String
})

export const Filme = mongoose.model("Filme", FilmeSchema)


