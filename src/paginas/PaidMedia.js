import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import ConoceMasPD from "../componentes/ConoceMasPM";
import Testimonios from "../componentes/Testimonios";
import VideoPM from "../componentes/VideoPM";

function PaidMedia() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <img className="logo" src="./img/logopr.png" alt="Logo" />
            <VideoPM /> 
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