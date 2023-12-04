import { useNavigate } from "react-router-dom"
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

function LetsTalk() {
    const navigate = useNavigate();
    const selOpt = () => {
        navigate("/lets-talk")
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <>
            <div className="contenedorLets">
                <div className="letras">
                    <p className="titulo1">Sé parte de nuestro mundo</p>
                    <p className="titulo2" onClick={selOpt}>Let's Talk</p>
                </div>
                <div class="imagenFlechaLT">
                    <a href="/lets-talk"><img src="./img/flechaNegraL.webp" alt="flecha Blanca Agencia Marketing Ambato - Prez, Agencia de marketing" class="flechaBlancaLT2" /></a>
                    <a href="/lets-talk"><img src="./img/flechaNegraL.webp" alt="flecha Negra Agencia Marketing Ambato - Prez, Agencia de marketing" class="flechaNegraLT2" /></a>
                </div>
            </div>
        </>
    )
}
export default LetsTalk