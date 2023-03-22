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
            <div className="tituloLetsTalk">
                <p className="titulo1">Sé parte de nuestro mundo</p>
                <p className="titulo2" onClick={selOpt}>Let´s Talk</p><span></span>
                <div className="imagen-padreLT"> 
                <img src="./img/flechaNegraL.webp" alt="Imagen 2" class="imagen2LT" />
                <img src="./img/flecha-blanca.webp" alt="Imagen 1" class="imagen1LT" />    
                </div>
            </div>
        </>
    )
}
export default LetsTalk