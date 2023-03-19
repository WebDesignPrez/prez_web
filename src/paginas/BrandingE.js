import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasBE from "../componentes/ConoceMasBE";
import VideoBE from "../componentes/VideoBE";
import FotoVideoBE from "../componentes/FotoVideoBE";

function BrandingE() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <img className="logo" src="./img/logopr.png" alt="Logo" />
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