import { useState } from 'react';
import axios from 'axios';

export default function FormLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(e) {
        e.preventDefault(); // evita o refresh da página

        try {
            const resposta = await axios.post('http://localhost:3000/api/usuarios', {
                email,
                senha
            });

            if (resposta.status === 201) {
                alert('Login realizado com sucesso!');
                window.location.href = '/';
                localStorage.setItem('usuarioId', resposta.data.id);
                console.log(resposta.data); // você pode salvar token ou redirecionar
            }
        }
        catch (erro) {
            alert('E-mail ou senha inválidos!');
            console.error(erro);
        }
    }

    return (
        <div className="formularioContainer">
            <div className="cabecalho">
                <img src="/logoMaior.png" alt="" />
                <h2>Login</h2>
            </div>
            <form onSubmit={handleLogin}>
                <div className="inputs">
                    <label htmlFor="email">Digite seu E-mail</label>
                    <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="inputs">
                    <label htmlFor="senha">Digite sua senha</label>
                    <input type="password" name="senha" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                </div>

                <button>Entrar</button>
            </form>
        </div>
    );
}