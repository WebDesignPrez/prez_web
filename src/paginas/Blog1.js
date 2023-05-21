import MenuLateral from '../componentes/MenuLateral'
import PiePaginaFormulario from '../componentes/PiePaginaFormulario'
import Blog1Info from '../componentes/Blog1Info';
import WhatsappIcon from '../componentes/Whatsapp';

document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

function Blog1() {
    return (
        <>
            <WhatsappIcon />
            <MenuLateral />
            <Blog1Info />
            <PiePaginaFormulario />
        </>
    )
}
export default Blog1