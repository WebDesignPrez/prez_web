import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasFV from "../componentes/ConoceMasFV";

function FotoVideo() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <LetsTalk />
            <ConoceMasFV />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default FotoVideo