import axios from 'axios';

export default function Card({ id, nome, genero }) {
    async function alugarFilme() {
    const idCliente = localStorage.getItem('usuarioId');

        if (!idCliente) {
            alert('Você precisa estar logado para alugar um filme.');
            return;
        }

        try {
            const dataAlugada = Date.now();
            const resposta = await axios.post('http://localhost:3000/api/aluguel', {
                usuarioId: idCliente,
                filmeId: id,
                dataAluguel: dataAlugada
            });

            if (resposta.status === 200 || resposta.status === 201) {
                alert('Aluguel registrado com sucesso!');
            }
        } catch (erro) {
        console.error('Erro ao registrar o aluguel:', erro);
        alert('Erro ao registrar o aluguel.');
        }
    }
    return (
        <div className="card">
            <img src={`images/${id}.jpg`} alt="Imagem do card" />
            <h2>{ nome }</h2>
            <span>{ genero }</span>
            <input type="hidden" name="id" value={id} />
            <button onClick={alugarFilme}>Alugar</button>
        </div>
    )
}