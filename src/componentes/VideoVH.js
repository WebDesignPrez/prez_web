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
                    onClick={handleVideoClick}
                >
                    Tu navegador no soporta la etiqueta de video HTML5.
                </video>
            </div>
            <div class="contenedorVH">
                <div class="filaVH">
                    <div class="columnaVH"><img className='potencia' src="./img/lapotenciaLogo.png" alt="" /></div>
                </div>
                <div class="filaVH moviluno">
                    <div class="columnaVH "><img className='sobre' src="./img/imagenCamion.jpg" alt="" /></div>
                    <div class="columnaVH "><img className='uno' src="./img/numero1Logo.png" alt="" /></div>
                </div>
            </div>
            <div class="contenedorIn noresponsive">
                <div class="filaIn">
                    <div class="columnaIn"><img className='una' src="./img/imagenuna.jpg" alt="Imagen 1" /></div>
                    <div class="columnaIn"><img className='dos' src="./img/imagendos.jpg" alt="Imagen 2" /></div>
                    <div class="columnaIn"><img className='tres' src="./img/imagentres.jpg" alt="Imagen 3" /></div>
                </div>
            </div>

            <div className='responsive'>
                <Carousel interval={3000} className={styles}>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src="./img/imagenuna.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src="./img/imagendos.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src="./img/imagentres.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>


                </Carousel>
            </div>
        </>

    );
}

export default VideoVH;
