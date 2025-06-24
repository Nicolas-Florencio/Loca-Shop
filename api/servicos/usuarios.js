import { Usuario } from "../modelo/usuario.js";

export async function cadastrarUsuario({email, senha, cpf}) {
    const usuario = new Usuario({
        email,
        senha,
        cpf
    })
    return await usuario.save()
}

export async function listarUsuarios(){
  return await Usuario.find();
}