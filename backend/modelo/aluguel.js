import mongoose, { Schema } from "mongoose";

export const AluguelSchema = new Schema({
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  filme: { type: Schema.Types.ObjectId, ref: 'Filme', required: true },
  dataAluguel: { type: Date, default: Date.now }
});


export const Aluguel = mongoose.model("Aluguel", AluguelSchema);
