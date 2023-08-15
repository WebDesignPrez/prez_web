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
                <meta name='author' content="Prez agencia de marketing digital, Anthony Perez"></meta>
                <title>Prez Agencia de Marketing Digital - Desarrollo Web</title>
                <meta name="description" content="Ofrecemos servicios profesionales de desarrollo web para ayudar a tu empresa a crear una presencia en línea efectiva. Desarrollamos sitios web personalizados y optimizados para mejorar tu visibilidad y alcanzar tus objetivos en línea."></meta>
                <meta name="keywords" content="Desarrollo web, Marketing digital, Agencia de marketing, Ambato, Ecuador, Diseño web, Estrategias digitales, Posicionamiento web, SEO, SEM, Redes sociales, Gestión de contenido, Email marketing, Analítica web, E-commerce, Branding, Campañas publicitarias, Creatividad digital, Marketing de contenidos, Experiencia de usuario (UX), Optimización de conversión (CRO)."></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta property="og:locale" content="es_EC"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="Icono desarrollo web Agencia Prez"></meta>
                <meta property="og:description" content="Ofrecemos servicios profesionales de desarrollo web para ayudar a tu empresa a crear una presencia en línea efectiva. Desarrollamos sitios web personalizados y optimizados para mejorar tu visibilidad y alcanzar tus objetivos en línea."></meta>
                <meta property="og:url" content="https://agenciaprez.com/desarrollo-web"></meta>
                <meta property="og:site_name" content="Prez Agencia de Marketing Digital"></meta>
                <meta property="article:modified_time" content="2023-07-26T12:00:00+00:00"></meta>
                <meta property="og:image" content="https://agenciaprez.com/img/desarrollo-web.webp"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:description" content="Ofrecemos servicios profesionales de desarrollo web para ayudar a tu empresa a crear una presencia en línea efectiva. Desarrollamos sitios web personalizados y optimizados para mejorar tu visibilidad y alcanzar tus objetivos en línea."></meta>
                <meta name="twitter:label1" content="Tiempo de lectura"></meta>
                <meta name="twitter:data1" content="5 minutos"></meta>
                <meta name="googlebot" content="index, follow"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="format-detection" content="telephone=no"></meta>
                <link rel="canonical" href="https://agenciaprez.com/desarrollo-web"></link>
                <link rel="alternate" hreflang="es_EC" href="https://agenciaprez.com/desarrollo-web"></link>
                <link rel="shortcut icon" href="https://agenciaprez.com/img/desarrollo-web.webp"></link>
                <link rel="apple-touch-icon" sizes="180x180" href="https://agenciaprez.com/img/desarrollo-web.webp"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="https://agenciaprez.com/img/desarrollo-web.webp"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="https://agenciaprez.com/img/desarrollo-web.webp"></link>
                <link rel="manifest" href="https://www.prezmarketing.com/site.webmanifest"></link>
                <meta name="msapplication-TileColor" content="#93e54c"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name="googlebot" content="index, follow"></meta>
                <meta name="google" content="nositelinkssearchbox"></meta>
                <meta name="google" content="notranslate"></meta>
                <meta name="google-site-verification" content="google-site-verification-code"></meta>
                <meta name="google" content="index,follow"></meta>
                
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