import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Servicios from "../componentes/Servicios";
import ConoceMasMD from "../componentes/ConoceMasMD";
import Testimonios from "../componentes/Testimonios";

function MarketingDigital() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <img className="logo" src="./img/prez-logo.png" alt="Logo" />
            <div className="tituloMarketing" id="Inicio">
                <div className="iconotituloizquierda">
                    <img src="./img/marke.svg" alt="" />
                    <div className="arrowBox">
                        <img src="./img/flecha-negra-abajo.webp" alt="" />
                    </div>
                </div>
                <div>
                    <p>Marketing</p>
                    <p><span>Digital</span></p>
                </div>
            </div>
            <div className="abajo">
                <p className="primera">La aventura<span> digital de tu negocio</span></p>
                <p><span>comienza aquí</span>. En nuestro mundo </p>
                <p>enfocado en resultados, podrás</p>
                <p>viajar en modo automático</p>
            </div>
            <div class="boxMarketing">
                <div class="item">
                    <p><span>Social</span></p>
                    <p><span>Media</span></p>
                    <p>Con nuestro enfoque creativo y experiencia en Social Media, po- demos aumentar
                        su presencia en este universo llamado Internet.</p>
                </div>
                <div class="item">
                    <img src="./img/mk-digital-prez-1.png" />
                </div>
                <div class="item">
                    <p><span>E-mail</span></p>
                    <p><span>Marketing</span></p>
                    <p>Viajemos al infinito y más allá con estrategias de E-mail Marketing innovadoras y efectivas.</p>
                </div>
                <div class="item">
                    <img src="./img/mk-digital-prez-4.png" />
                </div>
                <div class="item">
                    <p><span>Inbound</span></p>
                    <p><span>Marketing</span></p>
                    <p>Atraer y educar a tus prospectos con contenido de valor. Interactu- ar con ellos en el momento co- rrecto y a fidealizarlos luego de sus compras.</p>
                </div>
                <div class="item">
                    <img src="./img/mk-digital-prez-2.png" />
                </div>
                <div class="item">
                    <p><span>Marketing de</span></p>
                    <p><span>contenidos</span></p>
                    <p>Llegamos a los usuarios con un alto potencial de compra por medio de anuncios en motores de búsqueda y redes sociales.</p>
                </div>
                <div class="item">
                    <img src="./img/mk-digital-prez-5.png" />
                </div>
                <div class="item">
                    <p><span>Analitica</span></p>
                    <p><span>Web</span></p>
                    <p>Analizamos tu páguina para darle a tus visitantes la mejor expe- riencia de navegación y aumentar tu tasa de conversión</p>
                </div>
                <div class="item">
                    <img src="./img/mk-digital-prez-3.png" />
                </div>
                <div class="item">
                    <p><span>SEO</span></p>
                    <p>Aplicamos técnicas y herramien-tra para posicionar tu página web entre los
                        primeros resultados de busqueda y, asi,alcanzar cada vez más visitantes, leads y conversio- nes.</p>
                </div>
                <div class="item">
                    <img src="./img/mk-digital-prez-6.png" />
                </div>

            </div>
            <span class="linea">¡El Universo Digital, ya no será un misterio. Preparemos motores y comencemos el viaje!</span>
            <div class="contenedor-imagenes">
                <img src="./img/imagenIzquierda.jpg" alt="Imagen 1" class="imagen1" />
                <img src="./img/imagenDerecha.jpg" alt="Imagen 2" class="imagen2" />
            </div>
            <LetsTalk />
            <h1>Conoce más</h1>
            <ConoceMasMD />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default MarketingDigital