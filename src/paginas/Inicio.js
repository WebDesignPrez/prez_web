import '../App.css';
import '../responsive.css';
import CasosExito from '../componentes/CasosExito';
import Clientes from '../componentes/Clientes';
import MenuLateral from "../componentes/MenuLateral"
import PiePagina from '../componentes/PiePagina';
import Servicios from '../componentes/Servicios';
import Testimonios from '../componentes/Testimonios';
import UltimosCasos from '../componentes/UltimosCasos';

function Inicio() {

    return (
        <>
            <MenuLateral />
            <img className="logo" src="./img/prez-logo.png" alt="Logo" />
            <div className="tituloInicio" id="Inicio">
                <p>En nuestro mundo</p>
                <p>no hay <span>imposibles,</span></p>
                <p>let's travel <span>together.</span></p>
                <div className="arrowBox">
                    <img src="./img/flecha-negra-abajo.webp" alt="" />
                </div>
            </div>
            <div className='boxVideoInicio'>
                <div className="videoInicio">
                    <img src="./img/img2.png" />

                </div>
            </div>
            <div class="tituloServicios" ><p>Nuestros Servicios</p></div>
            <Servicios />
            <CasosExito />
            <UltimosCasos />
            <Clientes />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default Inicio