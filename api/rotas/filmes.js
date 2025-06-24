import { listarFilmes } from "../servicos/filmes.js";

export function rotasFilmes(app){
    app.get("/api/Catalogo", async (req, res) => {
        return res.json(await listarFilmes())
    })
}


