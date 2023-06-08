import { useNavigate } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import styles from '../carusel.css';



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

            <div id="Servicios" className="serviciosRow noresponsive">
                <div className="box" onClick={() => { selOpt('md') }}>
                    <div className="imgBox">
                        <img src="./img/marketing-digital.webp" alt="Marketing Digital Agencia Marketing Ambato - Prez" />
                    </div>
                    <div className="tituloBox"><h1>Marketing<br></br> Digital</h1></div>
                    <div className="descBox"><p>La aventura digital de tu negocio comienza aquí. En nuestro mundo enfocado en resultados, podrás viajar en modo automático.</p></div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Flecha Negra Prez" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Flecha Verde Prez" class="imagen2B" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('pm') }}>
                    <div className="imgBox">
                        <img src="./img/paid-media.webp" alt="Paid Media Agencia Marketing Ambato - Prez" />
                    </div>
                    <div className="tituloBox"><h2>Paid<br></br> Media</h2></div>
                    <div className="descBox"><p>Tu marca brillará aún más con estrategias de pago en todo el ecosistema digital.</p></div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Flecha Negra Prez" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Flecha Verde Prez" class="imagen2B" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('be') }}>
                    <div className="imgBox">
                        <img src="./img/branding.webp" alt="Branding Estratégico Agencia Marketing Ambato - Prez" />
                    </div>
                    <div className="tituloBox"><h2>Branding <br></br>Estratégico</h2></div>
                    <div className="descBox"><p>Encontramos lo que te hace único y se lo contamos al mundo.</p></div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Flecha Negra Prez" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Flecha Verde Prez" class="imagen2B" />
                    </div>
                </div>
            </div>
            <div className="serviciosRow noresponsive">
                <div className="box" onClick={() => { selOpt('dw') }}>
                    <div className="imgBox">
                        <img src="./img/desarrollo-web.webp" alt="Desarrollo Web / e-comerce Agencia Marketing Ambato - Prez" />
                    </div>
                    <div className="tituloBox"><h2>Desarrollo Web <br></br>/ e-commerce</h2></div>
                    <div className="descBox"><p>Desarrollamos un sitio web funcional, elegante y vendedor para tu empresa</p></div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Flecha Negra Prez" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Flecha Verde Prez" class="imagen2B" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('gl') }}>
                    <div className="imgBox">
                        <img src="./img/generacionleads.png" alt="Generacion de Leads Agencia Marketing Ambato - Prez" />
                    </div>
                    <div className="tituloBox"><h2>Generación de <br></br>Leads</h2></div>
                    <div className="descBox"><p>Estrategias de redes sociales para alcanzar y convertir nuevos clientes</p></div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Flecha Negra Prez" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Flecha Verde Prez" class="imagen2B" />
                    </div>
                </div>
                <div className="lineaVertical"></div>
                <div className="box" onClick={() => { selOpt('fv') }}>
                    <div className="imgBox">
                        <img src="./img/produccion.webp" alt="Producción fotográfica, audio y video Agencia Marketing Ambato - Prez" />
                    </div>
                    <div className="tituloBox"><h2>Producción, <br></br>fotográfica, audio y video</h2></div>
                    <div className="descBox"><p>Desarrollo, producción y post producción de fotografías, videos y piezas audiovisuales.</p></div>
                    <div class="imagen-padre">
                        <img src="./img/flechaNegraL.webp" alt="Flecha Negra Prez" class="imagen1B" />
                        <img src="./img/flechaVerdeListo.webp" alt="Flecha Verde Prez" class="imagen2B" />
                    </div>
                </div>
            </div>


            {/*Segundo carusel*/}
            <div className="margencarusel responsive ">
                <Carousel interval={3000} className={styles}>
                    <Carousel.Item onClick={() => { selOpt('md') }}>
                        <img 
                            className="d-block w-100"
                            src="./img/marketing-digital.webp"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Marketing Digital</h3>
                            <p>La aventura digital de tu negocio comienza aquí. En nuestro mundo enfocado en resultados, podrás viajar en modo automático.</p>
                            <div class="imagen-padre">
                                <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item onClick={() => { selOpt('pm') }}>
                        <img
                            className="d-block w-100"
                            src="./img/paid-media.webp"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Paid Media</h3>
                            <p>Tu marca brillará aún más con estrategias de pago en todo el ecosistema digital.</p>
                            <div class="imagen-padre">
                                <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item onClick={() => { selOpt('be') }}>
                        <img
                            className="d-block w-100"
                            src="./img/branding.webp"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Branding Estratégico</h3>
                            <p>Encontramos lo que te hace único y se lo contamos al mundo.</p>
                            <div class="imagen-padre">
                                <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item onClick={() => { selOpt('dw') }}>
                        <img
                            className="d-block w-100"
                            src="./img/desarrollo-web.webp"
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <h3>Desarrollo Web / e-commerce</h3>
                            <p>Desarrollamos un sitio web funcional, elegante y vendedor para tu empresa.</p>
                            <div class="imagen-padre">
                                <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item onClick={() => { selOpt('gl') }}>
                        <img
                            className="d-block w-100"
                            src="./img/generacionleads.png"
                            alt="Fifth slide"
                        />
                        <Carousel.Caption>
                            <h3>Generación de Leads</h3>
                            <p>Estrategias de redes sociales para alcanzar y convertir nuevos clientes.</p>
                            <div class="imagen-padre">
                                <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item onClick={() => { selOpt('fv') }}>
                        <img
                            className="d-block w-100"
                            src="./img/produccion.webp"
                            alt="Susxth slide"
                        />
                        <Carousel.Caption>
                            <h3>Producción, fotográfica, audio y video</h3>
                            <p>Desarrollo, producción y post producción de fotografías, videos y piezas audiovisuales.</p>
                            <div class="imagen-padre">
                                <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1B" />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
        </>
    )
}
export default Servicios


