import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasBE from "../componentes/ConoceMasBE";
import VideoBE from "../componentes/VideoBE";
import FotoVideoBE from "../componentes/FotoVideoBE";
import WhatsappIcon from '../componentes/Whatsapp';
import { Helmet } from "react-helmet";

function BrandingE() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>  
            <Helmet>
            <meta name="author" content="Prez Agencia de Marketing Digital, Anthony Perez"/>
<title>Prez Agencia de Marketing Digital - Branding Estratégico y Video</title>
<meta name="description" content="Ofrecemos servicios profesionales de Branding Estratégico y Video para ayudarte a crear y fortalecer tu marca. Nuestro equipo te guiará en la Creación de Marca y Rebranding, desarrollando una estrategia sólida para reflejar la personalidad de la marca y establecer el tono de voz adecuado."/>
<meta name="keywords" content="Branding Estratégico, Video, Creación de marca, Rebranding, Estrategia, Personalidad de la marca, Tono de voz, Agencia de marketing, Ambato, Ecuador"/>
<meta name="robots" content="index, follow"/>
<meta property="og:locale" content="es_EC"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Prez Agencia de Marketing Digital - Branding Estratégico y Video"/>
<meta property="og:description" content="Ofrecemos servicios profesionales de Branding Estratégico y Video para ayudarte a crear y fortalecer tu marca. Nuestro equipo te guiará en la Creación de Marca y Rebranding, desarrollando una estrategia sólida para reflejar la personalidad de la marca y establecer el tono de voz adecuado."/>
<meta property="og:url" content="https://agenciaprez.com/branding-estrategico"/>
<meta property="og:site_name" content="Prez Agencia de Marketing Digital"/>
<meta property="article:modified_time" content="2023-07-26T12:00:00+00:00"/>
<meta property="og:image" content="https://agenciaprez.com/img/branding.webp"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:description" content="Ofrecemos servicios profesionales de Branding Estratégico y Video para ayudarte a crear y fortalecer tu marca. Nuestro equipo te guiará en la Creación de Marca y Rebranding, desarrollando una estrategia sólida para reflejar la personalidad de la marca y establecer el tono de voz adecuado."/>
<meta name="twitter:label1" content="Tiempo de lectura"/>
<meta name="twitter:data1" content="5 minutos"/>
<meta name="googlebot" content="index, follow"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="format-detection" content="telephone=no"/>
<link rel="canonical" href="https://agenciaprez.com/branding-estrategico/"/>
<link rel="alternate" hreflang="es_EC" href="https://agenciaprez.com/branding-estrategico/"/>
<link rel="shortcut icon" href="https://agenciaprez.com/imagesLogo/favicon.ico"/>
<link rel="apple-touch-icon" sizes="180x180" href="https://agenciaprez.com/imagesLogo/favicon.ico"/>
<link rel="icon" type="image/png" sizes="32x32" href="https://agenciaprez.com/imagesLogo/favicon.ico"/>
<link rel="icon" type="image/png" sizes="16x16" href="https://agenciaprez.com/imagesLogo/favicon.ico"/>
<link rel="manifest" href="https://www.prezmarketing.com/site.webmanifest"/>
<meta name="msapplication-TileColor" content="#93e54c"/>
<meta name="theme-color" content="#ffffff"/>
<meta name="robots" content="index, follow"/>
<meta name="googlebot" content="index, follow"/>
<meta name="google" content="nositelinkssearchbox"/>
<meta name="google" content="notranslate"/>
<meta name="google-site-verification" content="google-site-verification-code"/>
<meta name="google" content="index,follow"/>

            </Helmet>
            <WhatsappIcon />
            <MenuLateral />
            <a href="./#"><img className="logo" src="./img/logopr.png" alt="Logo Prez Agencia de Marketing Ambato Ecuador" /></a>
            <VideoBE/>
            <FotoVideoBE/>
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <ConoceMasBE/>
            <br/>
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default BrandingE