import Formulario from '../componentes/Formulario'
import MenuLateral from '../componentes/MenuLateral'
import PiePagina from '../componentes/PiePagina'
import PiePaginaFormulario from '../componentes/PiePaginaFormulario'

function Contacto(){
    return(
        <>
            <MenuLateral />               
                <Formulario />
            <PiePaginaFormulario />
        </>
    )
}
export default Contacto