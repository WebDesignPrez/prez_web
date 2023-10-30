import '../App.css';
import '../responsive.css';
//import CasosExito from '../componentes/CasosExito';
//import Clientes from '../componentes/Clientes';
import MenuLateral from "../componentes/MenuLateral"
import PiePagina from '../componentes/PiePagina';
//import Servicios from '../componentes/Servicios';
//import Testimonios from '../componentes/Testimonios';
//import UltimosCasos from '../componentes/UltimosCasos';
import MenuLateralSinHome from '../componentes/MenuLateralSinHome';
import WhatsappIcon from '../componentes/Whatsapp';
import SliderComponent from '../componentes/SliderComponent';
import CookieConsent, { Cookies } from "react-cookie-consent";
import Ejemplo from '../componentes/ejemplo';
//import LetsTalk from '../componentes/LetsTalk';
import React, { useRef } from 'react';
import { Helmet } from "react-helmet";
import { useState, lazy, Suspense } from 'react';
import Formulario from '../componentes/Formulario';
import PiePaginaFormulario from '../componentes/PiePaginaFormulario';
//import VideoHome from '../componentes/VideoHome';

const VideoHome = lazy(() => import('../componentes/VideoHome'));
const Servicios = lazy(() => import('../componentes/Servicios'));
const CasosExito = lazy(() => import('../componentes/CasosExito'));
const UltimosCasos = lazy(() => import('../componentes/UltimosCasos'));
const LetsTalk = lazy(() => import('../componentes/LetsTalk'));
const Clientes = lazy(() => import('../componentes/Clientes'));
const Testimonios = lazy(() => import('../componentes/Testimonios'));

function Inicio() {
  const mostrarElemento = false;
  return (
    <>
      <Helmet>
        <meta name='author' content="Prez agencia de marketing digital, Anthony Perez"></meta>
        <title>Prez Agencia de Marketing Ambato - Servicios SEO, Paid Media, Desarrollo Web, Producción Fotográfica, Audio y Video</title>
        <meta name="description" content="Prez Agencia de Marketing Ambato, Agencia de marketing ofrece servicios de Marketing Digital, Paid Media, Desarrollo Web / e-commerce, Producción Fotográfica, Audio y Video. Mejora tu presencia en línea y aumenta tu visibilidad con nuestras soluciones de SEO y estrategias de marketing digital efectivas."></meta>
        <meta name="keywords" content="Agencia de marketing, Agencia de marketing Ambato, Prez, Agencia Prez, Marketing digital, Ambato, Ecuador, Paid Media, Desarrollo Web, e-commerce, Producción Fotográfica, Audio, Video, SEO, servicios de marketing digital, agencia de marketing digital"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:locale" content="es_EC"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Prez Agencia de Marketing Digital, Agencia de marketing - Servicios SEO, Paid Media, Desarrollo Web, Producción Fotográfica, Audio y Video"></meta>
        <meta property="og:description" content="Prez Agencia de Marketing Digital, Agencia de marketing ofrece servicios de Marketing Digital, Paid Media, Desarrollo Web / e-commerce, Producción Fotográfica, Audio y Video. Mejora tu presencia en línea y aumenta tu visibilidad con nuestras soluciones de SEO y estrategias de marketing digital efectivas."></meta>
        <meta property="og:url" content="https://agenciaprez.com"></meta>
        <meta property="og:site_name" content="Prez Agencia de Marketing Digital"></meta>
        <meta property="article:modified_time" content="2023-07-26T12:00:00+00:00"></meta>
        <meta property="og:image" content="https://agenciaprez.com/static/media/agencia-de-marketing-prez-astronauta-vamos-a-viajar-juntos.bbd8bc42af29fd00ed7c.webp"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:description" content="Prez Agencia de Marketing Digital, Agencia de marketing ofrece servicios de Marketing Digital, Paid Media, Desarrollo Web / e-commerce, Producción Fotográfica, Audio y Video. Mejora tu presencia en línea y aumenta tu visibilidad con nuestras soluciones de SEO y estrategias de marketing digital efectivas."></meta>
        <meta name="twitter:label1" content="Tiempo de lectura"></meta>
        <meta name="twitter:data1" content="5 minutos"></meta>
        <meta name="googlebot" content="index, follow"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="format-detection" content="telephone=+593959792827"></meta>
        <link rel="canonical" href="https://agenciaprez.com"></link>
        <link rel="alternate" hreflang="es_EC" href="https://agenciaprez.com"></link>
        <link rel="shortcut icon" href="https://agenciaprez.com/imagesLogo/favicon.ico"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="https://agenciaprez.com/imagesLogo/favicon.ico"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="https://agenciaprez.com/imagesLogo/favicon.ico"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="https://agenciaprez.com/imagesLogo/favicon.ico"></link>
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
      <div hidden>
          <p>Bienvenido a nuestra <span class="keyword">Agencia de Marketing Ambato</span>, una <span class="keyword">agencia de marketing</span> líder en la región. Como una reconocida <span class="keyword">agencia de marketing</span>, nos enorgullece ofrecer servicios de alta calidad para impulsar tu negocio.</p>
          <p>Nuestra <span class="keyword">agencia de marketing en Ambato</span> se especializa en estrategias de <span class="keyword">marketing</span> digital que son efectivas y personalizadas para cada cliente. En <span class="location">Ambato</span>, somos conocidos por nuestra experiencia en <span class="keyword">marketing</span> en línea y nuestro enfoque centrado en el cliente.</p>
          <p>En <span class="location">Ambato</span>, confían en nuestra <span class="keyword">Agencia de Marketing Ambato</span> para mejorar su visibilidad en línea y aumentar sus conversiones. Nuestros servicios de <span class="keyword">marketing</span> incluyen SEO, publicidad en redes sociales, diseño web y mucho más.</p>
          <p>Si estás buscando una <span class="keyword">agencia de marketing en Ambato</span> que te ayude a alcanzar tus objetivos comerciales, no busques más. En <span class="location">Ambato</span>, somos la <span class="keyword">agencia de marketing</span> de elección para empresas que buscan resultados reales y un enfoque personalizado.</p>
      </div>
      <WhatsappIcon />
      <img className="logo" src="./img/logopr.png" alt="Logo Prez Agencia de Marketing Ambato Ecuador, Agencia de marketing" />
      <div className="tituloInicio" id="Inicio">
        <div className='conteLetrasInicio'>
          <p>En nuestro mundo</p>
          <p>no hay <span>imposibles,</span></p>
          <p>let's travel <span>together.</span></p>
        </div>

        {/* FLECHA VIEJA 
                  <div className="arrowBox">
                      <img src="./img/flecha-negra-abajo.webp" alt="" />
                  </div>*/}

        {/* NUEVA FLECHA 3 */}

        <div class="line-container arrowBox bajar">
          <div class="line"></div>
        </div>
      </div>
      <Suspense fallback={<div><p>Cargando...</p></div>}>
        <VideoHome />
        <Servicios />
        <CasosExito />
        <UltimosCasos />
        <Formulario />
        <LetsTalk />
        <Testimonios />
        <Clientes />

        <PiePaginaFormulario />
      </Suspense>

    </>
  )
}
export default Inicio
