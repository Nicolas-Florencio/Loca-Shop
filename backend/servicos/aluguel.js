import { Aluguel } from "../modelo/aluguel.js";

export async function cadastrarAluguel({ usuarioId, filmeId, dataDevolucao }) {
    const aluguel = new Aluguel({
        usuario: usuarioId,
        filme: filmeId,
        dataDevolucao
    });
    return await aluguel.save();
}

export async function listarAlugueis() {
    return await Aluguel.find().populate('usuario').populate('filme');
}
