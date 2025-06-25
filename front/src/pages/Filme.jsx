import { useEffect, useState } from 'react';
import '../App';
import Card from '../components/Card';
import axios from 'axios';

function Filme() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function buscarFilmes() {
            try {
                const resposta = await axios.get('http://localhost:3000/api/Catalogo');
                //console.log(resposta)
                setFilmes(resposta.data);
            }
            catch(e) {
                console.error('Erro ao registrar o aluguel:', e);
                alert('Erro ao registrar o aluguel.');
            }
        }

        buscarFilmes();
    }, []);
    return (
        <>
            <div className="containerCards">
                {filmes.map(filme => (
                    <Card key={filme._id} id={filme._id} nome={filme.nome} genero={filme.genero}  />
                ))}
            </div>
        </>
    )
}

export default Filme