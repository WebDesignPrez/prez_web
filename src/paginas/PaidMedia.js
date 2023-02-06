import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";

function PaidMedia(){
    return(
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
        
        <PiePagina />
    </>
    )
}
export default PaidMedia