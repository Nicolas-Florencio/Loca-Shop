import { useState } from "react";
import axios from "axios";

export default function FormCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); // evita refresh da página

    try {
      const resposta = await axios.post("http://localhost:3000/api/cadastrar", {
        email,
        senha,
        cpf
      });

      if (resposta.status === 201) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = '/login';
        localStorage.setItem('usuarioId', resposta.data.id);
        //console.log(resposta.data); // você pode salvar token ou redirecionar
        // Aqui pode limpar o formulário ou redirecionar
        setEmail("");
        setSenha("");
        setCpf("");
      }
    } catch (erro) {
      alert(erro.response?.data?.erro || "Erro ao cadastrar usuário");
    }
  }

  return (
    <div className="formularioContainer">
      <div className="cabecalho">
        <img src="/logoMaior.png" alt="Logo" />
        <h2>Cadastro</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <label htmlFor="email">Digite seu E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputs">
          <label htmlFor="senha">Digite sua senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
        </div>
        <div className="inputs">
          <label htmlFor="cpf">Digite seu CPF</label>
          <input
            type="number"
            name="cpf"
            id="cpf"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
