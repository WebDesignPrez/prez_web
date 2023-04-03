import Formulario from '../componentes/Formulario'
import MenuLateral from '../componentes/MenuLateral'
import PiePagina from '../componentes/PiePagina'
import PiePaginaFormulario from '../componentes/PiePaginaFormulario'
import FormularioBitrix from '../componentes/FornularioBitrix'

function Contacto() {
    return (
        <>
            {/*<MenuLateral />*/}
            <MenuLateral />
            <FormularioBitrix/>
            <PiePaginaFormulario />
            { /*<PiePaginaFormulario />*/}
        </>
    )
}
export default Contacto