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
import Formulario from "../componentes/Formulario";

function FotoVideo() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  return (
    <>
      <Helmet>
        <meta name="author" content="Prez Agencia de Marketing Digital, Anthony Perez" />
        <title>Prez Agencia de Marketing Digital - Producción de Foto y Video</title>
        <meta name="description" content="Ofrecemos servicios profesionales de Producción de Fotografía y Video para capturar momentos únicos y crear contenido visual impactante. Nuestro equipo experto te ayudará en la Producción de Fotografía y Video de alta calidad, y también te ofrecemos estrategias de Audiomarketing para potenciar tu marca con contenido sonoro." />
        <meta name="keywords" content="Producción de fotografía, Producción de video, Audiomarketing, Agencia de marketing, Ambato, Ecuador" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="es_EC" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prez Agencia de Marketing Digital - Producción de Foto y Video" />
        <meta property="og:description" content="Ofrecemos servicios profesionales de Producción de Fotografía y Video para capturar momentos únicos y crear contenido visual impactante. Nuestro equipo experto te ayudará en la Producción de Fotografía y Video de alta calidad, y también te ofrecemos estrategias de Audiomarketing para potenciar tu marca con contenido sonoro." />
        <meta property="og:url" content="https://agenciaprez.com/produccion-fotografia-video" />
        <meta property="og:site_name" content="Prez Agencia de Marketing Digital" />
        <meta property="article:modified_time" content="2023-07-26T12:00:00+00:00" />
        <meta property="og:image" content="https://agenciaprez.com/img/produccion.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Ofrecemos servicios profesionales de Producción de Fotografía y Video para capturar momentos únicos y crear contenido visual impactante. Nuestro equipo experto te ayudará en la Producción de Fotografía y Video de alta calidad, y también te ofrecemos estrategias de Audiomarketing para potenciar tu marca con contenido sonoro." />
        <meta name="twitter:label1" content="Tiempo de lectura" />
        <meta name="twitter:data1" content="5 minutos" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://agenciaprez.com/produccion-fotografia-video" />
        <link rel="alternate" hreflang="es_EC" href="https://agenciaprez.com/produccion-fotografia-video" />
        <link rel="shortcut icon" href="https://agenciaprez.com/imagesLogo/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://agenciaprez.com/imagesLogo/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://agenciaprez.com/imagesLogo/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://agenciaprez.com/imagesLogo/favicon.ico" />
        <link rel="manifest" href="https://www.prezmarketing.com/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#93e54c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta name="google-site-verification" content="google-site-verification-code" />
        <meta name="google" content="index,follow" />
      </Helmet>
      <WhatsappIcon />
      <MenuLateral />
      <a href="./#"><img className="logo" src="./img/logopr.png" alt="Logo Prez Agencia de Marketing Ambato Ecuador, Agencia de marketing" /></a>
      <VideoFO />
      <FotoVideoFO />
      <Formulario />
      <LetsTalk />
      <ConoceMasFV />
      <Testimonios />
      <PiePagina />
    </>
  )
}
export default FotoVideo