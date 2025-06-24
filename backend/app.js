import express from "express";
import cors from "cors";

import { conectarBanco } from "./conexao.js"; 
import { rotasFilmes } from "./rotas/filmes.js";
import { rotasUsuarios } from "./rotas/usuarios.js";
import { rotasAluguel } from "./rotas/aluguel.js";

const app = express();
app.use(cors());
app.use(express.json());

export {app}

rotasAluguel(app)
rotasFilmes(app)
rotasUsuarios(app)


// conexão com o mongo e a porta que o servidor vai rodar
try 
{
    await conectarBanco();
    const PORTA = 3000;
    app.listen(PORTA);
    console.log(`Aguardando conexões na porta ${PORTA}`);
} catch (erro) {
    console.log("Erro ao incializar", erro);
}   


/* TESTE DE ALUGUEL

{
    "usuarioId": "68590313f54ecb39a12417d3",
    "filmeId": "68573a0e1152f5f3f577c69b",
    "dataDevolucao": "2024-07-01"
}

localhost:3000/api/aluguel
*/