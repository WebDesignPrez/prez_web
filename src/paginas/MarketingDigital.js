import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Servicios from "../componentes/Servicios";
import ConoceMasMD from "../componentes/ConoceMasMD";
import Testimonios from "../componentes/Testimonios";
import SliderComponent from "../componentes/SliderComponent";
import VideoLoop from "../componentes/VideoLoop";

function MarketingDigital() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
        <img className="logo" src="./img/logo-prezagencia.png" alt="Logo" />
            <MenuLateral />
            <VideoLoop />
            <span class="linea">¡El Universo Digital, ya no será un misterio. Preparemos motores y comencemos el viaje!</span>
            <div class="contenedor-imagenes">
                <img src="./img/imagenIzquierda.jpg" alt="Imagen 1" class="imagen1" />
                <img src="./img/imagenDerecha.jpg" alt="Imagen 2" class="imagen2" />
            </div>
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <SliderComponent />
            <br />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default MarketingDigital