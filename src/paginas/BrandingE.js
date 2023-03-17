import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasBE from "../componentes/ConoceMasBE";
import SliderComponent from "../componentes/SliderComponent";

function BrandingE() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <div className="paidPage">
                <div className="marketingImg">
                    <img src="" alt="Brabing Estratégico"/>
                </div>
            </div>
            <div className="abajo">
                <p className="primera">Encontramos<span> lo que le hace única</span> a tu marca y se lo contamos al mundo</p>
            </div>
            <div class="boxMarketing">
                <div class="item">
                    <p><span>Creación</span></p>
                    <p><span>de marca</span></p>
                    <p>Una marca es una identificación, que cuando se habla de aspectos comerciales, es la que representa
                        una identidad simbólica de una empresa, producto o servicio, es decir el activo intangible más importante
                        de la empresa.
                    </p>
                </div>
                <div class="item">
                    <img src="./img/branding_estrategico/brandingicono4.png" />
                </div>
                <div class="item">
                    <p><span>Rebranding</span></p>
                    <p>El rebranding es una estrategia de marteking que consiste en el cambio de nombre o marca, ya sea realizando
                        una variación del original o cambiando por completo a uno nuevo con el objetivo de mejorar el posicionamiento
                        de la marca.</p>
                </div>
                <div class="item">
                    <img src="./img/branding_estrategico/brandingicono3.png" />
                </div>
                <div class="item">
                    <p><span>Estrategia</span></p>
                    <p>La creación de percepción positiva a través de la estrategia está en un nivel más profundoi, en el que el clientes
                        se identifica no solo con el estilo, sino también con las creencias de la marca lo que hace una conexión más fuerte.</p>
                </div>
                <div class="item">
                    <img src="./img/branding_estrategico/estrategia-icono.png" />
                </div>
                <div class="item">
                    <p><span>Personalidad</span></p>
                    <p><span>de la marca</span></p>
                    <p>¿Tu marca tiene personalidad? ¿Cuáles son sus cualidades? ¿Qué es lo que la define? Y si fiera una persona, ¿cómo seria?
                        Esas preguntas ayudan a crear una imagen mental más clara.</p>
                </div>
                <div class="item">
                    <img src="./img/branding_estrategico/brandingicono2.png" />
                </div>
                <div class="item">
                    <p><span>Tono de voz</span></p>
                    <p>¿Cómo es el lenguaje de tu marca? ¿Es divertido? ¿Es especializado? Lo que necesitas es alinear tu lenguaje a tu
                        público. Busca cuáles son las palabras que ellos usan.</p>
                </div>
                <div class="item">
                    <img src="./img/5BE.png" />
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
export default BrandingE