export default function Footer() {
    return (
        <footer>
            <div className="endereco">
                <span>Venha nos visitar!</span>
                <address>
                    Rua dos tucucus, 321, Bairro Mococa, Camburiu - PE
                </address>
            </div>
            <div className="copyright">
                <h2>Todos os direitos reservados</h2>
                <i>Fatec Marilia</i>
            </div>
            <div className="contato">
                <p>Contato</p>
                <a href="https://facebook.com" target="blank"><img src="/facebook.png" alt="facebook" /></a>
                <a href="https://instagram.com" target="blank"><img src="/instagram.png" alt="instagram" /></a>
            </div>
        </footer>
    )
}