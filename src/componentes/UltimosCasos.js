import LetsTalk from "../componentes/LetsTalk"
import Carousel from 'better-react-carousel'

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
            
            <div className="casosEBox">
                <Carousel cols={3} rows={1} gap={30} loop>
                        <Carousel.Item>
                            <img width="100%" src="./img/exito1.png" alt="" />
                            <p><strong>Conversión</strong> del <br></br>32% para clientes nuevos.<span></span></p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="./img/exito2.png" alt="" />
                            <p><strong>Conversión</strong> del <br></br>32% para clientes nuevos.<span></span></p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="./img/exito3.png" alt="" />
                            <p><strong>Conversión</strong> del <br></br>32% para clientes nuevos.<span></span></p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="./img/exito1.png" alt="" />
                            <p><strong>Conversión</strong> del <br></br>32% para clientes nuevos.<span></span></p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="./img/exito1.png" alt="" />
                            <p><strong>Conversión</strong> del <br></br>32% para clientes nuevos.<span></span></p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="./img/exito1.png" alt="" />
                            <p><strong>Conversión</strong> del <br></br>32% para clientes nuevos.<span></span></p>
                        </Carousel.Item>
                </Carousel>
            </div>
            
            <LetsTalk />
        </>
    )
}
export default UltimosCasos