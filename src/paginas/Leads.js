import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasGL from "../componentes/ConoceMasGL";
import FotoVideoLE from "../componentes/FotoVideoLE";
import VideoLE from "../componentes/VideoLE";

function Leads() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
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