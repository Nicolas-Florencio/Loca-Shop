import { Aluguel } from "../modelo/aluguel.js";

export async function cadastrarAluguel({ usuarioId, filmeId, dataAluguel }) {
  const aluguel = new Aluguel({
    usuario: usuarioId,
    filme: filmeId,
    dataAluguel
  });
  return await aluguel.save();
}

export async function listarAlugueis() {
  return await Aluguel.find()
    .populate("usuario")
    .populate("filme");
}
