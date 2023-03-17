import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasFV from "../componentes/ConoceMasFV";
import SliderComponent from "../componentes/SliderComponent";

function FotoVideo() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <img className="logo" src="./img/logopr.png" alt="Logo" />
            <div className="paidPage">
                <div className="marketingImg">
                    <img src="" alt="Produccioón fotográfica audio y video"/>
                </div>
            </div>
            <div className="abajo">
                <p className="primera">Desarrollo<span>, produccion y post produccion</span> de fotografías, videos y 
                piezas audiovisuales.</p>
            </div>
            <div class="boxMarketing">
                <div class="item">
                    <p><span>Producción de</span></p>
                    <p><span>fotografía</span></p>
                    <p>Desarrollamos estrategias enfocadas en llamar la atención de tu audencia y obtener los datos necesarios.
                    </p>
                </div>
                <div class="item">
                    <img src="./img/fo1.png" />
                </div>
                <div class="item">
                    <p><span>Centralización y</span></p>
                    <p><span>segmentación de</span></p>
                    <p><span>contactos CRM</span></p>
                    <p>El rebranding es una estrategia de marteking que consiste en el cambio de nombre o marca, ya sea realizando
                        una variación del original o cambiando por completo a uno nuevo con el objetivo de mejorar el posicionamiento
                        de la marca.</p>
                </div>
                <div class="item">
                    <img src="./img/fo2.png" />
                </div>
                <div class="item">
                    <p><span>Captación de</span></p>
                    <p><span>leads</span></p>
                    <p>Desarrollamos estrategias enfocadas en llamar la atención de tu audencia y obtener los datos necesarios.
                    </p>
                </div>
                <div class="item">
                    <img src="./img/fo3.png" />
                </div>
            </div>
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <SliderComponent />
            <br/>
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default FotoVideo