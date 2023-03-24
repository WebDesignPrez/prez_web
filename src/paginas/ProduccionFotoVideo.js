import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasFV from "../componentes/ConoceMasFV";
import SliderComponent from "../componentes/SliderComponent";
import VideoFO from "../componentes/VideoFO";
import FotoVideoFO from "../componentes/FotoVideoFO";

function FotoVideo() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <a href="./#"><img className="logo" src="./img/logopr.png" alt="Logo" /></a>
            <VideoFO />
            <FotoVideoFO/>
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <ConoceMasFV />
            <br/>
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default FotoVideo