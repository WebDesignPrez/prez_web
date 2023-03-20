import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasGL from "../componentes/ConoceMasGL";
import SliderComponent from "../componentes/SliderComponent";
import FotoVideoLE from "../componentes/FotoVideoLE";

function Leads() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <img className="logo" src="./img/logopr.png" alt="Logo" />
            <div className="paidPage">
                <div className="marketingImg">
                    <img src="" alt="Generación de Leads"/>
                </div>
            </div>
            <div className="abajo">
                <p>Estrategias de<span> redes sociales para alcanzar</span> y convertir <span className="fondoV">nuevos clientes</span>.</p>
            </div>
            <div class="boxMarketingLE">
                <div class="item">
                    <p><span>Captación de leads</span></p>
                    <p>Desarrollamos estrategias enfocadas en llamar la atención de tu audencia y obtener los datos necesarios.
                    </p>
                </div>
                <div class="item">
                    <img src="./img/le1.png" />
                </div>
                <div class="item">
                    <p><span>Centralización y segmentación de contactos CRM</span></p>
                    <p>El rebranding es una estrategia de marteking que consiste en el cambio de nombre o marca, ya sea realizando
                        una variación del original o cambiando por completo a uno nuevo con el objetivo de mejorar el posicionamiento
                        de la marca.</p>
                </div>
                <div class="item">
                    <img src="./img/le2.png" />
                </div>
            </div>
            <FotoVideoLE/>
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <ConoceMasGL/>
            <br/>
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default Leads