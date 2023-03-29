import MenuLateral from '../componentes/MenuLateral'
import PiePaginaFormulario from '../componentes/PiePaginaFormulario'
import Blog2Info from '../componentes/Blog2Info';

document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

function Blog2() {
    return (
        <>
            <MenuLateral />
            <Blog2Info />
            <PiePaginaFormulario />
        </>
    )
}
export default Blog2