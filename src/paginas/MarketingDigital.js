import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";

function MarketingDigital(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return(
    <>
        <MenuLateral />
        <div className="marketingPage">
            <div className="marketingImg">
                <img src="./img/banner1.png" />
            </div>
        </div>
            <div className="marketingBox">
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
            <div className="marketingBox">
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
export default MarketingDigital