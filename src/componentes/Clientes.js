
import Carousel from 'better-react-carousel'
import { useState } from 'react';


function Clientes() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setCurrentIndex(0);
    }
  };

    return (
        < div >
            <div className="clientesTitulo" id="Clientes">
                Clientes que viajan <br></br>con nosotros
            </div>
            <div className="clientesBox noresponsive">
                <Carousel cols={5} rows={3} gap={10} autoplay={2550} loop>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo1.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/uniandes.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo4.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo3.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo5.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo6.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo2.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo16.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo13.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo26.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/deone.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo10.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/ctt.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo29.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo20.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo28.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo8.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo9.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo11.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/fast.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo12.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo15.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo17.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo18.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo19.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo21.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo22.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo23.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo24.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo25.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo27.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo30.png" alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <div className="clientesBox responsive">
                <Carousel cols={1} rows={1} gap={0} autoplay={1650} interval={200} loop={true}>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo1.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/uniandes.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo4.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo3.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo5.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo6.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo2.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo16.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo13.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo26.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/deone.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo10.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/ctt.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo29.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo20.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo28.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo8.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo9.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo11.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/fast.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo12.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo15.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo17.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo18.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo19.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo21.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo22.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo23.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo24.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo25.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo27.png" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="./img/logos/logo30.png" alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}
export default Clientes