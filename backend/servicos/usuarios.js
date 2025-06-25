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

export async function cadastrarUsuario({ email, senha, cpf }) {
  // Verifica se já existe usuário com o mesmo email ou cpf
  const usuarioExistente = await Usuario.findOne({
    $or: [{ email }, { cpf }]
  });

  if (usuarioExistente) {
    throw new Error('Usuário já cadastrado com este email ou CPF');
  }

  // Cria novo usuário (aqui sem hash, mas recomendo hash para produção)
  const novoUsuario = new Usuario({ email, senha, cpf });
  return await novoUsuario.save();
}
