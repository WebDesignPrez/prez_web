import { useNavigate } from "react-router-dom"

function ConoceMasPD(){
    const navigate = useNavigate();
    const selOpt = (opt) => {
        switch (opt) {
            case "md":
                navigate("/marketing-digital")
                break;
            case "pm":
                navigate("/paid-media")
                break;
            case "be":
                navigate("/branding-estratégico")
                break;
            case "dw":
                navigate("/desaroolo-web")
                break;
            case "gl":
                navigate("/generacion-leads")
                break;
            case "fv":
                navigate("/produccion-fotografia-video")
                break;
            default:
                break;
        }
      }

    return ( 
        <>     
            <div id="Servicios" className="serviciosRow">
                <div className="box" onClick={() => { selOpt('md') }}>
                    <div className="imgBox">
                        <img src="./img/marketing-digital.webp" alt="" />
                    </div>
                    <div className="tituloBox">Marketing<br></br> Digital</div>
                    <div className="descBox">Planiﬁcación, desarrollo y gentión de estrategias digitales. Content marketing, Inbound marketing</div>
                    <div className="arrowBox">
                        <img src="./img/flecha-negra.webp" alt="" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('be') }}>
                    <div className="imgBox">
                        <img src="./img/branding.webp" alt="" />
                    </div>
                    <div className="tituloBox">Branding <br></br>Estratégico</div>
                    <div className="descBox">La identidad corporativa de tu marca. Encontramos lo que te hace único y se lo contamos al mundo.</div>
                    <div className="arrowBox">
                        <img src="./img/flecha-negra.webp" alt="" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('dw') }}>
                    <div className="imgBox">
                        <img src="./img/desarrollo-web.webp" alt="" />
                    </div>
                    <div className="tituloBox">Desarollo Web <br></br>/ e-commerce</div>
                    <div className="descBox">Desarrollamos un sitio web funcional, elegante y vendedor para tu empresa</div>
                    <div className="arrowBox">
                        <img src="./img/flecha-negra.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ConoceMasPD