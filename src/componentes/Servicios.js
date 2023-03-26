import Slider from 'react-slick';
import { useNavigate } from "react-router-dom"
const settings = {
    dots: true,
    arrows: true,
    speed: 200,
    fade: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
};

function Servicios() {
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
                    <div className="descBox">La aventura digital de tu negocio comienza aquí. En nuestro mundo enfocado en resultados, podrás viajar en modo automático.</div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Imagen 2" class="imagen2B" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('pm') }}>
                    <div className="imgBox">
                        <img src="./img/paid-media.webp" alt="" />
                    </div>
                    <div className="tituloBox">Paid<br></br> Media</div>
                    <div className="descBox">Tu marca brillará aún más con estrategias de pago en todo el ecosistema digital.</div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Imagen 2" class="imagen2B" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('be') }}>
                    <div className="imgBox">
                        <img src="./img/branding.webp" alt="" />
                    </div>
                    <div className="tituloBox">Branding <br></br>Estratégico</div>
                    <div className="descBox">Encontramos lo que te hace único y se lo contamos al mundo.</div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Imagen 2" class="imagen2B" />
                    </div>
                </div>
            </div>
            <div className="serviciosRow">
                <div className="box" onClick={() => { selOpt('dw') }}>
                    <div className="imgBox">
                        <img src="./img/desarrollo-web.webp" alt="" />
                    </div>
                    <div className="tituloBox">Desarrollo Web <br></br>/ e-commerce</div>
                    <div className="descBox">Desarrollamos un sitio web funcional, elegante y vendedor para tu empresa</div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Imagen 2" class="imagen2B" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('gl') }}>
                    <div className="imgBox">
                        <img src="./img/generacionleads.png" alt="" />
                    </div>
                    <div className="tituloBox">Generación de <br></br>Leads</div>
                    <div className="descBox">Estrategias de redes sociales para alcanzar y convertir nuevos clientes</div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Imagen 2" class="imagen2B" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('fv') }}>
                    <div className="imgBox">
                        <img src="./img/produccion.webp" alt="" />
                    </div>
                    <div className="tituloBox">Producción, <br></br>fotográfica, audio y video</div>
                    <div className="descBox">Desarrollo, producción y post producción de fotografías, videos y piezas audiovisuales.</div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Imagen 2" class="imagen2B" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Servicios