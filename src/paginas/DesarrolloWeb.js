import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasDW from "../componentes/ConoceMasDW";
import VideoDE from "../componentes/VideoDE";
import FotoVideoDE from "../componentes/FotoVideoDE";
import WhatsappIcon from '../componentes/Whatsapp';

function DesarrolloWeb() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>  
            <WhatsappIcon />
            <MenuLateral />
            <a href="./#"><img className="logo" src="./img/logopr.png" alt="Logo" /></a>
            <VideoDE/>
            <FotoVideoDE/>
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <ConoceMasDW />
            <br/>
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default DesarrolloWeb