import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <img src="/logoPequena.png" alt="logo" />
            <nav>
                <div className="itens">
                    <Link to = "/">Inicio</Link>
                    <Link to = "/filmes">Filmes</Link>
                    <Link to = "/login">Login</Link>
                    <Link to = "/cadastro">Cadastro</Link>
                </div>
            </nav>
        </>
    )
} 