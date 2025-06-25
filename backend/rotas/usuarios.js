import { loginUsuario, cadastrarUsuario } from "../servicos/usuarios.js";

export function rotasUsuarios(app){
    app.post("/api/usuarios", async (req, res) => {
        try {
            const { email, senha, cpf} = req.body;
            const usuario = await loginUsuario({email, senha, cpf});
            res.status(201).json(usuario);
        }
        catch (erro) {
            res.status(500).json({ mensagem: "Erro ao cadastrar usuario", erro})
        }
    })

    app.post('/api/cadastrar', async (req, res) => {
        try {
            const { email, senha, cpf } = req.body;
            const usuario = await cadastrarUsuario({ email, senha, cpf });
            res.status(201).json(usuario);
        }
        catch (erro) {
            res.status(400).json({ erro: erro.message });
        }
    });

    app.get("/api/usuarios", async (req, res) => {
        return res.json()
    })
}