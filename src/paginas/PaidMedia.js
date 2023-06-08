import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import ConoceMasPD from "../componentes/ConoceMasPM";
import Testimonios from "../componentes/Testimonios";
import VideoPM from "../componentes/VideoPM";
import FotoVideoPM from "../componentes/FotoVideoPM";
import WhatsappIcon from '../componentes/Whatsapp';
import { Helmet } from "react-helmet";

function PaidMedia() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <Helmet>
                <title>Agencia Prez - Paid Media</title>
                <meta name="title" content="Agencia Prez - Paid Media" />
                <meta name="description" content="Potencia tu estrategia de marketing con nuestras soluciones de Paid Media. Nuestros servicios de publicidad pagada te ayudarán a alcanzar a tu público objetivo de manera efectiva a través de campañas en redes sociales, búsqueda pagada y otros canales publicitarios." />
                <meta name="keywords" content="agencia prez, paid media, publicidad pagada, campañas en redes sociales, búsqueda pagada"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name='author' content="Prez agencia de marketing digital"></meta>
            </Helmet>
            <WhatsappIcon />
            <MenuLateral />
            <a href="./#"><img className="logo" src="./img/logopr.png" alt="Logo Prez Agencia de Marketing Ambato Ecuador" /></a>
            <VideoPM />
            <FotoVideoPM/> 
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <ConoceMasPD />
            <br />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default PaidMedia