import mongoose, { Schema } from "mongoose"

export const UsuarioSchema = new Schema ({
    email: String,
    senha: String,
    cpf: Number
})

export const Usuario = mongoose.model("Usuario", UsuarioSchema)