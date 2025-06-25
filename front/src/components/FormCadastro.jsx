export default function FormCadastro() {
    return (
        <div className="formularioContainer">
            <div className="cabecalho">
                <img src="/logoMaior.png" alt="" />
                <h2>Cadastro</h2>
            </div>
            <form action="POST">
                <div className="inputs">
                    <label htmlFor="email">Digite seu E-mail</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="inputs">
                    <label htmlFor="senha">Digite sua senha</label>
                    <input type="password" name="senha" id="senha" />
                </div>
                <div className="inputs">
                    <label htmlFor="cpf">Digite seu CPF</label>
                    <input type="number" name="cpf" id="cpf" />
                </div>
                <button>Enviar</button>
            </form>

        </div>
    );
}