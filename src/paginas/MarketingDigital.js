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
                    <p>Con nuestro enfoque creativo y</p>
                    <p>experiencia en Social Media, po-</p>
                    <p>podemos aumentar su presencia</p>
                    <p>en este universo llamado Internet.</p>
                </div>
                <div class="item">
                    <img src="./img/social-media.png"/>
                </div>
                <div class="item">
                    <p><span>E-mail</span></p>
                    <p><span>Marketing</span></p>
                    <p>Viajemos al infinito y</p>
                    <p>más allá con estrategias</p>
                    <p>de E-mail Marketing</p>
                    <p>innovadoras y efectivas.</p>
                </div>
                <div class="item">
                    <img src="./img/mailing.png"/>
                </div>
                <div class="item">
                    <p><span>Inbound</span></p>
                    <p><span>Marketing</span></p>
                    <p>Atraer y educar a tus prospec-</p>
                    <p>tos con contenido de valor.</p>
                    <p>Interactuar con ellos en el mo-</p>
                    <p>mento correcto y a fidealizarlos</p>
                    <p>luego de sus compras.</p>
                </div>
                <div class="item">
                    <img src="./img/inbound-mk.png"/>
                </div>
                <div class="item">
                    <p><span>Marketing de</span></p>
                    <p><span>contenidos</span></p>
                    <p>Llegamos a los usuarios con un</p>
                    <p>alto potencial de compra por</p>
                    <p>medio de anuncios en motores</p>
                    <p>de búsqueda y redes sociales.</p>
                </div>
                <div class="item">
                    <img src="./img/mk-de-contemidos.png"/>
                </div>
                <div class="item">
                    <p><span>Analitica</span></p>
                    <p><span>Web</span></p>
                    <p>Analizamos tu páguina para</p>
                    <p>darle a tus visitantes la mejor</p>
                    <p>experiencia de navegación y</p>
                    <p>aumentar tu tasa de conver-</p>
                    <p>sión</p>
                </div>
                <div class="item">
                    <img src="./img/analitica-web.png"/>
                </div>
                <div class="item">
                    <p><span>SEO</span></p>
                    <p>Aplicamos técnicas y herra-</p>
                    <p>mientras para posicionar tu</p>
                    <p>página web entre los primeros</p>
                    <p>resultados de busqueda y, asi,</p>
                    <p>alcanzar cada vez más visitan-</p>
                    <p>tes, leads y conversiones.</p>
                </div>
                <div class="item">
                    <img src="./img/seo.png"/>
                </div>

            </div>
            <span class="linea">¡El Universo Digital, ya no será un misterio. Preparemos motores y comencemos el viaje!</span>
            <div class="contenedor-imagenes">
                <img src="./img/imagenIzquierda.jpg" alt="Imagen 1" class="imagen1"/>
                <img src="./img/imagenDerecha.jpg" alt="Imagen 2" class="imagen2"/>
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