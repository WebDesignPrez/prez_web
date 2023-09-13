import Formulario from '../componentes/Formulario'
import MenuLateral from '../componentes/MenuLateral'
import PiePagina from '../componentes/PiePagina'
import PiePaginaFormulario from '../componentes/PiePaginaFormulario'
import FormularioBitrix from '../componentes/FornularioBitrix'
import WhatsappIcon from '../componentes/Whatsapp';
import { Helmet } from 'react-helmet'


function Contacto() {
    return (
        <>
            <Helmet>
                <title>Agencia Prez - Contacto</title>
                <meta name="title" content="Agencia Prez - Contacto" />
                <meta name="description" content="Ponte en contacto con nuestra agencia de marketing especializada en branding estratégico. Estamos aquí para responder tus preguntas y ayudarte a impulsar tu marca." />
                <meta name="keywords" content="agencia prez, contacto, marketing, branding estratégico, impulsar marca"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name='author' content="Prez agencia de marketing digital"></meta>
            </Helmet>
            <WhatsappIcon />
            {/*<MenuLateral />*/}
            <MenuLateral />
            <Formulario/>
            {/* <FormularioBitrix /> */}
            <PiePaginaFormulario />
        </>
    )
}
export default Contacto