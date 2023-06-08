import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasDW from "../componentes/ConoceMasDW";
import VideoDE from "../componentes/VideoDE";
import FotoVideoDE from "../componentes/FotoVideoDE";
import WhatsappIcon from '../componentes/Whatsapp';
import { Helmet } from "react-helmet";

function DesarrolloWeb() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <Helmet>
                <title>Agencia Prez - Desarrollo Web</title>
                <meta name="title" content="Agencia Prez - Desarrollo Web" />
                <meta name="description" content="Ofrecemos servicios profesionales de desarrollo web para ayudar a tu empresa a crear una presencia en línea efectiva. Desarrollamos sitios web personalizados y optimizados para mejorar tu visibilidad y alcanzar tus objetivos en línea." />
                <meta name="keywords" content="agencia prez, desarrollo web, diseño web, desarrollo de sitios web, presencia en línea"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name='author' content="Prez agencia de marketing digital"></meta>
            </Helmet>
            <WhatsappIcon />
            <MenuLateral />
            <a href="./#"><img className="logo" src="./img/logopr.png" alt="Logo Prez Agencia de Marketing Ambato Ecuador" /></a>
            <VideoDE />
            <FotoVideoDE />
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <ConoceMasDW />
            <br />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default DesarrolloWeb