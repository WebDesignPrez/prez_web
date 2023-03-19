import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasDW from "../componentes/ConoceMasDW";
import VideoDE from "../componentes/VideoDE";

function DesarrolloWeb() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <VideoDE/>
            <img className="logo" src="./img/logopr.png" alt="Logo" />
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