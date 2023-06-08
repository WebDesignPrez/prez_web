import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import ConoceMasMD from "../componentes/ConoceMasMD";
import Testimonios from "../componentes/Testimonios";
import VideoLoop from "../componentes/VideoLoop";
import FotoVideoMD from "../componentes/FotoVideoMD";
import Ejemplo from "../componentes/ejemplo";
import WhatsappIcon from '../componentes/Whatsapp';
import { Helmet } from "react-helmet";

function MarketingDigital() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <Helmet>
                <title>Agencia Prez - Marketing Digital</title>
                <meta name="title" content="Agencia Prez - Marketing Digital" />
                <meta name="description" content="Ofrecemos servicios completos de marketing digital para ayudar a tu empresa a crecer en línea. Nuestro equipo de expertos en marketing digital utiliza estrategias efectivas para aumentar tu visibilidad, generar leads y mejorar tus resultados en línea." />
                <meta name="keywords" content="agencia prez, marketing digital, estrategias de marketing, visibilidad en línea, generación de leads"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name='author' content="Prez agencia de marketing digital"></meta>
            </Helmet>
            <WhatsappIcon />
            <a href="./#"><img className="logo" src="./img/logopr.png" alt="Logo Prez Agencia de Marketing Ambato Ecuador" /></a>
            <MenuLateral />
            <VideoLoop />
            <FotoVideoMD />
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <ConoceMasMD/>
            <br />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default MarketingDigital