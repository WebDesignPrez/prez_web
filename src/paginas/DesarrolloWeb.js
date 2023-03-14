import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasDW from "../componentes/ConoceMasDW";

function DesarrolloWeb() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <LetsTalk />
            <ConoceMasDW />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default DesarrolloWeb