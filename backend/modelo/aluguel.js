import mongoose, { Schema } from "mongoose";

export const AluguelSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    filme: { type: Schema.Types.ObjectId, ref: 'Filme' },
    dataAluguel: { type: Date, default: Date.now },
    dataDevolucao: { type: Date }, // opcional
});

export const Aluguel = mongoose.model("Aluguel", AluguelSchema);
