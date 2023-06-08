import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasFV from "../componentes/ConoceMasFV";
import SliderComponent from "../componentes/SliderComponent";
import VideoFO from "../componentes/VideoFO";
import FotoVideoFO from "../componentes/FotoVideoFO";
import WhatsappIcon from '../componentes/Whatsapp';
import { Helmet } from "react-helmet";

function FotoVideo() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <Helmet>
                <title>Agencia Prez - Producción de Foto y Video</title>
                <meta name="title" content="Agencia Prez - Producción de Foto y Video" />
                <meta name="description" content="Ofrecemos servicios de producción de foto y video de alta calidad para ayudar a capturar y transmitir la esencia de tu marca. Nuestro equipo de expertos en producción crea contenido visual atractivo y profesional que destaca tus productos, servicios y mensajes clave." />
                <meta name="keywords" content="agencia prez, producción foto y video, fotografía profesional, videografía, contenido visual"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name='author' content="Prez agencia de marketing digital"></meta>
            </Helmet>
            <WhatsappIcon />
            <MenuLateral />
            <a href="./#"><img className="logo" src="./img/logopr.png" alt="Logo Prez Agencia de Marketing Ambato Ecuador" /></a>
            <VideoFO />
            <FotoVideoFO/>
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <ConoceMasFV />
            <br/>
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default FotoVideo