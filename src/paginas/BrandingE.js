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
                <title>Agencia Prez - Branding Estratégico</title>
                <meta name="title" content="Agencia Prez - Branding Estratégico" />
                <meta name="description" content="Somos una agencia de marketing especializada en estrategias de branding estratégico. Ayudamos a las marcas a destacar y conectar con su público objetivo a través de una identidad de marca sólida y mensajes impactantes. Descubre cómo podemos potenciar tu marca" />
                <meta name="keywords" content="agencia prez, branding estratégico, marketing, marca, estrategia de marca"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name='author' content="Prez agencia de marketing digital"></meta>
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