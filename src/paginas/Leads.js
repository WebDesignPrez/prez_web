import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasGL from "../componentes/ConoceMasGL";
import FotoVideoLE from "../componentes/FotoVideoLE";
import VideoLE from "../componentes/VideoLE";
import WhatsappIcon from '../componentes/Whatsapp';
import { Helmet } from "react-helmet";

function Leads() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <Helmet>
                <title>Agencia Prez - Leads</title>
                <meta name="title" content="Agencia Prez - Leads" />
                <meta name="description" content="Generamos leads de calidad para tu negocio. Nuestros servicios de generación de leads te ayudarán a captar clientes potenciales y aumentar tus oportunidades de venta. Descubre cómo podemos impulsar tu crecimiento con estrategias efectivas de generación de leads." />
                <meta name="keywords" content="agencia prez, leads, generación de leads, captación de clientes, oportunidades de venta"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name='author' content="Prez agencia de marketing digital"></meta>
            </Helmet>
            <WhatsappIcon />
            <MenuLateral />
            <a href="./#"><img className="logo" src="./img/logopr.png" alt="Logo" /></a>
            <VideoLE />
            <FotoVideoLE />
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <ConoceMasGL />
            <br />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default Leads