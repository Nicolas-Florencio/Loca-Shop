import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav>
                <img className='logoNav' src="/logoPequena.png" alt="logo" />
                <div className="itens">
                    <Link className='link' to = "/">Inicio</Link>
                    <Link className='link' to = "/filmes">Filmes</Link>
                    <Link className='link' to = "/login">Login</Link>
                    <Link className='link' to = "/cadastro">Cadastro</Link>
                </div>
            </nav>
        </>
    )
} 