import { cadastrarUsuario, listarUsuarios } from "../servicos/usuarios.js";

export function rotasUsuarios(app){
    app.post("/api/usuarios", async (req, res) => {
        try {
            const { email, senha, cpf} = req.body;
            const usuario = await cadastrarUsuario({email, senha, cpf});
            res.status(201).json(usuario);
        } catch (erro) {
            res.status(500).json({ mensagem: "Erro ao cadastrar usuario", erro})
        }
    })

    app.get("/api/usuarios", async (req, res) => {
        return res.json(await listarUsuarios())
    })
}