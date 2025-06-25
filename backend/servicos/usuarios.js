import { Usuario } from "../modelo/usuario.js";

export async function loginUsuario({ email, senha }) {
    // Verifica se existe um usuário com o email e a senha exatos
    const usuario = await Usuario.findOne({ email, senha });

    if (!usuario) {
      throw new Error('Credenciais inválidas');
    }

    // Sucesso: retorna dados do usuário
    return {
      id: usuario._id,
      email: usuario.email,
      cpf: usuario.cpf
    };
}
