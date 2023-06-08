import '../responsive.css';
import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import VideoVH from "../componentes/VideoVH";
import FotoVideoVH from "../componentes/FotoVideoVH";
import HerramientasVH from "../componentes/HerramientasVH";
import Testimonios from "../componentes/Testimonios";
import WhatsappIcon from '../componentes/Whatsapp';
import { Helmet } from 'react-helmet';


function Vehicentro() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <Helmet>
                <title>Agencia Prez - Leads</title>
                <meta name="title" content="Agencia Prez - Leads" />
                <meta name="description" content="En Agencia Prez, trabajamos en estrecha colaboración con Vehicentro, una empresa líder en venta de camiones en Ecuador. Nuestros servicios de marketing digital, branding estratégico y generación de leads han contribuido al crecimiento y éxito de Vehicentro. Descubre cómo nuestras soluciones personalizadas han impulsado su visibilidad, aumentado las ventas y mejorado su presencia en línea." />
                <meta name="keywords" content="agencia prez, vehicentro, marketing digital, branding estratégico, generación de leads, venta de camiones"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name='author' content="Prez agencia de marketing digital"></meta>
            </Helmet>
            <WhatsappIcon />
            <MenuLateral />
            <div className="LogoClienteCasoExito">
                <img src="./img/logoVehicentro.png" alt="logo Vehicentro" />
	        </div>
            <VideoVH />
            <FotoVideoVH />
            <div class="tituloServiciosVH" ><p>Herramientas</p></div>
            <div class="tituloServiciosVH" ><p>Utilizadas</p></div>
            <HerramientasVH/>
            <br/>
            <LetsTalk/>
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default Vehicentro