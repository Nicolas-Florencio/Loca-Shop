
import { Filme } from "../modelo/filmes.js";

export async function listarFilmes(){
  return await Filme.find();
}