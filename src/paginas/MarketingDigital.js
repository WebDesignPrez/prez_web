import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import ConoceMasMD from "../componentes/ConoceMasMD";
import Testimonios from "../componentes/Testimonios";
import VideoLoop from "../componentes/VideoLoop";
import FotoVideoMD from "../componentes/FotoVideoMD";
import Ejemplo from "../componentes/ejemplo";

function MarketingDigital() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
        <img className="logo" src="./img/logopr.png" alt="Logo" />
            <MenuLateral />
            <VideoLoop />
            <FotoVideoMD />
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <Ejemplo/>
            <br />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default MarketingDigital