import { useNavigate } from "react-router-dom"

function ConoceMasDW(){
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
                navigate("/desarrollo-web")
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
                    <div className="box" onClick={() => { selOpt('gl') }}>
                    <div className="imgBox">
                        <img src="./img/leads.webp" alt="" />
                    </div>
                    <div className="tituloBox">Generación de <br></br>Leads</div>
                    <div className="descBox">Estrategias de redes sociales para alcanzar y convertir nuevos clientes</div>
                    <div className="arrowBox">
                        <img src="./img/flecha-negra.webp" alt="" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('fv') }}>
                    <div className="imgBox">
                        <img src="./img/produccion.webp" alt="" />
                    </div>
                    <div className="tituloBox">Producción, <br></br>fotografía y video</div>
                    <div className="descBox">Desarrollo, producción y post producción de fotografías, videos y piezas audiovisuales.</div>
                    <div className="arrowBox">
                        <img src="./img/flecha-negra.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ConoceMasDW