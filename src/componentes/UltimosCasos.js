import LetsTalk from "../componentes/LetsTalk"

function UltimosCasos(){
    return(
        <>
            <div className="tituloCasos" id="Ultimos-casos">
                <p>Últimos casos</p>
            </div>
            <div className="casosRow2">
                <div className="casosImg">
                    <img src="./img/exito1.png" alt="Vehicentro" />
                    <div className="desc">
                        <p><strong>Conversión</strong> del <br></br>32% para clientes nuevos.<span></span></p>
                    </div>
                </div>
                
                <div className="casosImg">
                    <img src="./img/exito2.png" alt="Vehicentro" />
                    <div className="desc">
                        <p><strong>Conversión</strong> del <br></br>32% para clientes nuevos.<span></span></p>
                    </div>
                </div>
                
                <div className="casosImg">
                    <img src="./img/exito3.png" alt="Vehicentro" />
                    <div className="desc">
                        <p><strong>Conversión</strong> del <br></br>32% para clientes nuevos.<span></span></p>
                    </div>
                </div>
            </div>
            <LetsTalk />
        </>
    )
}
export default UltimosCasos