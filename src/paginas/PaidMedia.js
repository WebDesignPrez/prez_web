import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import ConoceMasPD from "../componentes/ConoceMasPM";
import Testimonios from "../componentes/Testimonios";

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
            <div className="marketingBox2">
                <p className="titulo">¿Necesitas Crecer ?</p>
                <div className="marketingCol">
                    <div className="col1">
                        Las desiciones que cambiaran <br></br>el rumbo de tu negocio <br></br>deben tomarse ahora
                    </div>
                    <div className="col2">
                        Planiﬁcación, desarrollo y gentión de estrategias digitales. Content marketing, Inbound marketing
                    </div>
                </div>
            </div>
            <div className="marketingBox2">
                <p className="titulo">¿Necesitas Crecer ?</p>
                <div className="marketingCol">
                    <div className="col1">
                        Las desiciones que cambiaran <br></br>el rumbo de tu negocio <br></br>deben tomarse ahora
                    </div>
                    <div className="col2">
                        Planiﬁcación, desarrollo y gentión de estrategias digitales. Content marketing, Inbound marketing
                    </div>
                </div>
            </div>
            <LetsTalk />
            <h1>Conoce más</h1>
            <ConoceMasPD />
            <Testimonios />
            <PiePagina />
        </>
    )
}
export default PaidMedia