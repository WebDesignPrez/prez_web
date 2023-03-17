import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import ConoceMasPD from "../componentes/ConoceMasPM";
import Testimonios from "../componentes/Testimonios";
import SliderComponent from "../componentes/SliderComponent";

function PaidMedia() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return (
        <>
            <MenuLateral />
            <div className="paidPage">
                <div className="marketingImg">
                    <img src="./img/banner2.png" />
                </div>
            </div>
            <div className="abajo">
                <p className="primera">Creamos<span> estratégias de Paid Media, </span> para que tu marca cumpla con los objetivos de venta</p>
            </div>
            <div class="boxMarketing">
                <div class="item">
                    <p><span>SEM</span></p>
                    <p>Googler ADS</p>
                    <p>El arma perfecta para conseguir ventas, leads, notariedad de marca</p>
                </div>
                <div class="item">
                    <img src="./img/paid_media/iconos-paid-media-1.png" />
                </div>
                <div class="item">
                    <p><span>Social</span></p>
                    <p><span>ADS</span></p>
                    <p>Desarrollo de campañas para Social ads, en las que se promocionan tus productos o servicios de forma personalizada.</p>
                    <div class="contenedor-imagenesPD">
                        <div class="filaimg">
                            <img src="./img/paid_media/FACE.png" />
                            <img src="./img/paid_media/FACE.png" />
                        </div>
                        <div class="filaimg">
                            <img src="./img/paid_media/FACE.png" />
                            <img src="./img/paid_media/FACE.png" />
                        </div>
                        <div class="filaimg">
                            <img src="./img/paid_media/FACE.png" />
                            <img src="./img/paid_media/FACE.png" />
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="./img/paid_media/iconos-paid-media-2.png" />
                </div>
            </div>
            <LetsTalk />
            <div class="tituloServicios" ><p>Conoce Más</p></div>
            <SliderComponent />
            <br />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default PaidMedia