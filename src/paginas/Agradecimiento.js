import MenuLateral from '../componentes/MenuLateral'
import PiePaginaFormulario from '../componentes/PiePaginaFormulario'
import WhatsappIcon from '../componentes/Whatsapp';
import '../../src/startStyle.css'

function Agradecimiento() {
    return (
        <>
            <WhatsappIcon />
            <MenuLateral />
            <div className='contenedorAgradecimiento'>
                <div className='letrasAgradecimiento'>
                <p><span>Gracias por contactarnos </span>, muy pronto uno de nuestros asesores se comunicará con usted.</p>
                </div>
                <div className='imagenAgradecimiento'>
                    <img src='./img/prezform.webp' alt="Astronauta Prez Agencia de Marketing Ambato - Ecuador"/>
                </div>
            </div>
{/* <div className='sky'>
    <section class="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className='contenedorAgradecimiento'>
                <div className='letrasAgradecimiento'>
                <p><span>Gracias por contactarnos </span>, muy pronto uno de nuestros asesores se comunicará con usted.</p>
                </div>
                <div className='imagenAgradecimiento'>
                    <img src='./img/prezform.webp' alt="Astronauta Prez Agencia de Marketing Ambato - Ecuador"/>
                </div>
            </div>
        </section>
</div> */}
            
            <PiePaginaFormulario />
        </>
    )
}
export default Agradecimiento