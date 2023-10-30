import { useNavigate } from "react-router-dom"

function HerramientasVH() {
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
            <div id="Servicios" className="serviciosRow serviciosclientes">
                <div className="box" onClick={() => { selOpt('md') }}>
                    <div className="imgBox">
                        <img src="./img/herramientas1.png" alt="Marketing Digital Prez Vehicentro, Agencia de marketing" />
                    </div>
                    <div className="tituloBox">Marketing<br></br> Digital</div>
                </div>

                <div className="lineaVertical"></div>

                <div className="box" onClick={() => { selOpt('pm') }}>
                    <div className="imgBox">
                        <img src="./img/herramientas2.png" alt="Paid Media Prez Vehicentro, Agencia de marketing" />
                    </div>
                    <div className="tituloBox">Paid<br></br> Media</div>
                </div>

                <div className="lineaVertical"></div>

                <div className="box" onClick={() => { selOpt('gl') }}>
                    <div className="imgBox">
                        <img src="./img/herramientas3.png" alt="Generación de Leads Prez Vehicentro, Agencia de marketing" />
                    </div>
                    <div className="tituloBox">Generación de <br></br>Leads</div>
                </div>

                <div className="lineaVertical"></div>
                
                <div className="box" onClick={() => { selOpt('dw') }}>
                    <div className="imgBox">
                        <img src="./img/herramientas5.png" alt="Desarrollo Web / e-commerce Prez Vehicentro, Agencia de marketing" />
                    </div>
                    <div className="tituloBox">Desarrollo Web <br></br>/ e-commerce</div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('fv') }}>
                    <div className="imgBox">
                        <img src="./img/herramientas4.png" alt="Producción, fotográfica, audio y video Prez Vehicentro, Agencia de marketing" />
                    </div>
                    <div className="tituloBox">Producción, <br></br>fotográfica, audio y video</div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box">
                </div>
            </div>
        </>
    )
}
export default HerramientasVH