import { cadastrarAluguel, listarAlugueis } from "../servicos/aluguel.js";

export function rotasAluguel(app) {
    // Criar um aluguel
    app.post("/api/aluguel", async (req, res) => {
        try {
            const { usuarioId, filmeId, dataDevolucao } = req.body;
            const aluguel = await cadastrarAluguel({ usuarioId, filmeId, dataDevolucao });
            res.status(201).json(aluguel);
        } catch (erro) {
            res.status(500).json({ mensagem: "Erro ao criar aluguel", erro });
        }
    });

    // Listar todos os alugueis
    app.get("/api/aluguel", async (req, res) => {
        try {
            const alugueis = await listarAlugueis();
            res.json(alugueis);
        } catch (erro) {
            res.status(500).json({ mensagem: "Erro ao listar alugueis", erro });
        }
    });
}
