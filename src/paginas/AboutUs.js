import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import InicioAboutUs from "../componentes/InicioAboutUS";
import PiePaginaFormulario from '../componentes/PiePaginaFormulario'
import JefesFotos from "../componentes/JefesFotos";
import WhatsappIcon from '../componentes/Whatsapp';
import { Helmet } from "react-helmet";

function AboutUs() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <Helmet>
                <title>Agencia Prez - Acerca de Nosotros</title>
                <meta name="title" content="Agencia Prez - Acerca de Nosotros" />
                <meta name="description" content="En Agencia Prez, somos una agencia de marketing digital dedicada a ayudar a las empresas a alcanzar su máximo potencial en línea. Nuestro equipo de expertos en marketing trabaja en estrecha colaboración con nuestros clientes para crear estrategias personalizadas que impulsen su crecimiento y éxito. Descubre quiénes somos y cómo podemos ayudarte a lograr tus objetivos de marketing." />
                <meta name="keywords" content="Marketing digital, Agencia de marketing, Ambato, Ecuador,agencia prez, acerca de nosotros, marketing digital, estrategias personalizadas, crecimiento empresarial"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name='author' content="Prez agencia de marketing digital"></meta>
            </Helmet>
            <WhatsappIcon />
            <MenuLateral />
            <InicioAboutUs />
            <JefesFotos />
            <LetsTalk />
            <PiePaginaFormulario />
        </>
    )
}
export default AboutUs