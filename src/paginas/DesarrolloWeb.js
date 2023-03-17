import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasDW from "../componentes/ConoceMasDW";
import SliderComponent from "../componentes/SliderComponent";

function DesarrolloWeb() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <div className="paidPage">
                <div className="marketingImg">
                    <img src="" alt="Desarrollo Web e-commerce"/>
                </div>
            </div>
            <div className="abajo">
                <p className="primera">Desarrollamos<span> un sitio web funcional</span>, elegante y vendedor para tu empreasa</p>
            </div>
            <div class="boxMarketing">
                <div class="item">
                    <p><span>Diseño y</span></p>
                    <p><span>desarrollo Web</span></p>
                    <p>Una marca es una identificación, que cuando se habla de aspectos comerciales, es la que representa una identidad
                        simbólica de una empresa, producto o servicio, es decir el activo intangible más importante de la empresa.
                    </p>
                </div>
                <div class="item">
                    <img src="./img/desarrollo/diseño-web-icono.png" />
                </div>
                <div class="item">
                    <p><span>E-commerce</span></p>
                    <p>El rebranding es una estrategia de marteking que consiste en el cambio de nombre o marca, ya sea realizando
                        una variación del original o cambiando por completo a uno nuevo con el objetivo de mejorar el posicionamiento
                        de la marca.</p>
                </div>
                <div class="item">
                    <img src="./img/desarrollo/ecommerce-icono.png" />
                </div>
                <div class="item">
                    <p><span>Apps Android / IOS</span></p>
                    <p>La creación de percepción positiva a través de la estrategia está en un nivel más profundoi, en el que el clientes
                        se identifica no solo con el estilo, sino también con las creencias de la marca lo que hace una conexión más fuerte.</p>
                </div>
                <div class="item">
                    <img src="./img/desarrollo/apps-icono.png" />
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
export default DesarrolloWeb