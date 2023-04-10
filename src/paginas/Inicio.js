import '../App.css';
import '../responsive.css';
import CasosExito from '../componentes/CasosExito';
import Clientes from '../componentes/Clientes';
import MenuLateral from "../componentes/MenuLateral"
import PiePagina from '../componentes/PiePagina';
import Servicios from '../componentes/Servicios';
import Testimonios from '../componentes/Testimonios';
import UltimosCasos from '../componentes/UltimosCasos';
import MenuLateralSinHome from '../componentes/MenuLateralSinHome';
import WhatsappIcon from '../componentes/Whatsapp';
import SliderComponent from '../componentes/SliderComponent';
import CookieConsent, { Cookies } from "react-cookie-consent";
import Ejemplo from '../componentes/ejemplo';
import LetsTalk from '../componentes/LetsTalk';
import { Helmet } from "react-helmet";


function Inicio() {

    //DATOS CLIENTES


    return (
        <>
            <Helmet>
                <title>Prez agencia de marketing digital | Servicios de marketing en línea</title>
                <meta name="description" content="Somos una agencia de marketing digital especializada en aumentar la visibilidad y las ventas de tu empresa en línea. ¡Contáctanos hoy mismo para obtener una estrategia personalizada!" />
                <meta name="keywords" content="marketing digital, agencia de marketing, SEO, SEM, redes sociales, publicidad en línea"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name='author' content="Prez agencia de marketing digital"></meta>
            </Helmet>
            <CookieConsent
                enableDeclineButton
                flipButtons
                buttonText="Aceptar"
                declineButtonText="Rechazar"
                buttonWrapperClasses="cookie-buttons"
                contentClasses="texto-cookies"
            >
                <span class="cookie-text">Acepte el uso de cookies para mejorar su experiencia en este sitio web.</span>
            </CookieConsent>

            <MenuLateralSinHome />
            <WhatsappIcon />
            <img className="logo" src="./img/logopr.png" alt="Logo" />
            <div className="tituloInicio" id="Inicio">
                <p>En nuestro mundo</p>
                <p>no hay <span>imposibles,</span></p>
                <p>let's travel <span>together.</span></p>

                {/* FLECHA VIEJA 
                <div className="arrowBox">
                    <img src="./img/flecha-negra-abajo.webp" alt="" />
                </div>*/}

                {/* NUEVA FLECHA 3 */}

                <div class="line-container arrowBox">
                    <div class="line"></div>
                </div>
            </div>
            {/* <div className='boxVideoInicio'>
                <div className="videoInicio noresponsive">
                    <video
                        src="./img/videoInicio.mp4"
                        autoPlay
                        loop
                        muted
                        style={{}}
                    >
                        Tu navegador no soporta la etiqueta de video HTML5.
                    </video>
                </div>
            </div> */}
            <div class="tituloServicios" ><p>Nuestros Servicios</p></div>
            <Servicios />
            <br />
            <CasosExito />
            <UltimosCasos />
            <LetsTalk />
            <Clientes />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default Inicio
