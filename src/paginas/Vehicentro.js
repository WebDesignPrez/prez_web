import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import VideoVH from "../componentes/VideoVH";
import FotoVideoVH from "../componentes/FotoVideoVH";
import SliderComponent from "../componentes/SliderComponent";


function Vehicentro() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <img className="logo" src="./img/logopr.png" alt="Logo" />
            <div className="tituloInicioVE" id="Inicio">
                <p>Caso de éxito</p>
            </div>
            <div className="logoVehi">
                <img src="./img/logoVehicentro.png" alt="" />
            </div>
            <div className="arrowBoxVe">
                <img src="./img/flecha-negra-abajo.webp" alt="" />
            </div>
            <VideoVH />
            <FotoVideoVH />
            <div class="tituloServiciosVH" ><p>Herramientas</p></div>
            <div class="tituloServiciosVH" ><p>Utilizadas</p></div>
            <br/>
            <SliderComponent/>
            <br/>
            <LetsTalk />
            <PiePagina />
        </>
    )
}
export default Vehicentro