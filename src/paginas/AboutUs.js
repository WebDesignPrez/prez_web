import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import InicioAboutUs from "../componentes/InicioAboutUS";
import PiePaginaFormulario from '../componentes/PiePaginaFormulario'
import JefesFotos from "../componentes/JefesFotos";

function AboutUs() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <InicioAboutUs />
            <JefesFotos />
            <LetsTalk />
            <PiePaginaFormulario />
        </>
    )
}
export default AboutUs