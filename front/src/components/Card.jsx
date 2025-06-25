export default function Card({ id, nome, genero }) {
    async function alugarFilme() {

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