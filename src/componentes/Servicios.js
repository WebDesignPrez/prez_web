import { useNavigate } from "react-router-dom"

function Servicios(){
    const navigate = useNavigate();
    const selOpt = (opt) => {
        switch (opt) {
            case "md":
                navigate("/marketing-digital")
                break;
            case "pm":
                navigate("/paid-media")
                break;                
        
            default:
                break;
        }
      }

    return ( 
        <>     
            <div id="Servicios" className="serviciosRow">
                <div className="box" onClick={()=>{selOpt('md')}}>
                    <div className="imgBox">
                        <img src="./img/serv1.png" alt="" />
                    </div>
                    <div className="tituloBox">Marketing<br></br> Digital</div>
                    <div className="descBox">Planiﬁcación, desarrollo y gentión de estrategias digitales. Content marketing, Inbound marketing</div>
                    <div className="arrowBox">
                    <img src="./img/flecha.png" alt="" />
                    </div>
                </div>
                <div className="box" onClick={()=>{selOpt('pm')}}>
                    <div className="imgBox">
                        <img src="./img/serv2.png" alt="" />
                    </div>
                    <div className="tituloBox">Paid<br></br> Media</div>
                    <div className="descBox">Estrategias de pauta en plataformas como Facebook ADS y Google ADS</div>
                    <div className="arrowBox">
                    <img src="./img/flecha.png" alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="./img/serv3.png" alt="" />
                    </div>
                    <div className="tituloBox">Branding Estratégico</div>
                    <div className="descBox">La identidad corporativa de tu marca. Encontramos lo que te hace único y se lo contamos al mundo.</div>
                    <div className="arrowBox">
                    <img src="./img/flecha.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="serviciosRow">
                <div className="box">
                    <div className="imgBox">
                        <img src="./img/serv4.png" alt="" />
                    </div>
                    <div className="tituloBox">Desarollo Web / e-commerce</div>
                    <div className="descBox">Desarrollamos un sitio web funcional, elegante y vendedor para tu empresa</div>
                    <div className="arrowBox">
                    <img src="./img/flecha.png" alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="./img/serv5.png" alt="" />
                    </div>
                    <div className="tituloBox">Generación de Leads</div>
                    <div className="descBox">Estrategias de redes sociales para alcanzar y convertir nuevos clientes</div>
                    <div className="arrowBox">
                    <img src="./img/flecha.png" alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="./img/serv6.png" alt="" />
                    </div>
                    <div className="tituloBox">Producción, fotografia y video</div>
                    <div className="descBox">Desarrollo, producción y post producción de fotografías, videos y piezas audiovisuales.</div>
                    <div className="arrowBox">
                    <img src="./img/flecha.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Servicios