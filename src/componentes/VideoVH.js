import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../carusel.css';

function VideoVH() {
    const boxMarketingRef = useRef(null);

    const handleVideoClick = () => {
        boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="videoInicioVH noresponsive">
                <video preload="none" autoPlay={true} playsInline={true} controls={false} loop muted 
                    src="./img/tamaraPrez.mp4"
                    alt="Tamara Vehicentro"
                    onClick={handleVideoClick}
                >
                    Tu navegador no soporta la etiqueta de video HTML5.
                </video>
            </div>
            <div class="contenedorVH">
                <div class="filaVH">
                    <div class="columnaVH"><img className='potencia' src="./img/lapotenciaLogo.png" alt="Potencia que levanta al Ecuador" /></div>
                </div>
                <div class="filaVH moviluno">
                    <div class="columnaVH "><img className='sobre' src="./img/imagenCamion.jpg" alt="Camion Sinotruk" /></div>
                    <div class="columnaVH "><img className='uno' src="./img/numero1Logo.png" alt="Numero 1 en ventas en Ecuador" /></div>
                </div>
            </div>
            <div class="contenedorIn noresponsive">
                <div class="filaIn">
                    <div class="columnaIn"><img className='una' src="./img/imagenuna.jpg" alt="Camión T5G" /></div>
                    <div class="columnaIn"><img className='dos' src="./img/imagendos.jpg" alt="Camión T5G 18 Ton" /></div>
                    <div class="columnaIn"><img className='tres' src="./img/imagentres.jpg" alt="Camión 8 Ton" /></div>
                </div>
            </div>

            <div className='responsive'>
                <Carousel interval={3000} className={styles}>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src="./img/imagenuna.jpg"
                            alt="Camión T5G"
                        />
                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src="./img/imagendos.jpg"
                            alt="Camión T5G 18 Ton"
                        />
                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src="./img/imagentres.jpg"
                            alt="Camión 8 Ton"
                        />
                    </Carousel.Item>


                </Carousel>
            </div>
        </>

    );
}

export default VideoVH;
