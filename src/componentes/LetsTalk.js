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
                <p className="titulo2" onClick={selOpt}>Let´s Talk</p><a className="flechaTL" href="">   →</a>
            </div>
                
        </>
    )
}
export default LetsTalk