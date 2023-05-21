import '../responsive.css';
import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import VideoVH from "../componentes/VideoVH";
import FotoVideoVH from "../componentes/FotoVideoVH";
import HerramientasVH from "../componentes/HerramientasVH";
import Testimonios from "../componentes/Testimonios";
import WhatsappIcon from '../componentes/Whatsapp';


function Vehicentro() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <WhatsappIcon />
            <MenuLateral />
            <div className="LogoClienteCasoExito">
                <img src="./img/logoVehicentro.png" alt="" />
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