import { useNavigate } from "react-router-dom"

function LetsTalk(){
    const navigate = useNavigate();
    const selOpt = () => {
        navigate("/lets-talk")
      }

    return(
        <>
            <div className="tituloLetsTalk">
                <p className="titulo1">Sé parte de nuestro mundo</p>
                <p className="titulo2" onClick={selOpt}>Let´s Talk</p><span></span>
            </div>
        </>
    )
}
export default LetsTalk