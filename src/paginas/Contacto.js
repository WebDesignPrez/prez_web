import Formulario from '../componentes/Formulario'
import MenuLateral from '../componentes/MenuLateral'
import PiePagina from '../componentes/PiePagina'
import PiePaginaFormulario from '../componentes/PiePaginaFormulario'
import FormularioBitrix from '../componentes/FornularioBitrix'
import WhatsappIcon from '../componentes/Whatsapp';


function Contacto() {
    return (
        <>
            <WhatsappIcon />
            {/*<MenuLateral />*/}
            <MenuLateral />
            {/* <Formulario/> */}
            <FormularioBitrix/>
            <PiePaginaFormulario />
            { /*<PiePaginaFormulario />*/}
        </>
    )
}
export default Contacto