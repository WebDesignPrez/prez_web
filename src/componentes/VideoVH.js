import React, { useRef } from 'react';

function VideoVH() {
    const boxMarketingRef = useRef(null);

    const handleVideoClick = () => {
        boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <video
                src="./img/tamaraPrez.mp4"
                autoPlay
                loop
                muted
                style={{ width: '100%', height: 'auto'}}
                onClick={handleVideoClick}
            >
                Tu navegador no soporta la etiqueta de video HTML5.
            </video>
            <div class="contenedorVH">
                <div class="filaVH">
                    <div class="columnaVH"><img className='potencia' src="./img/lapotenciaLogo.png" alt="" /></div>
                </div>
                <div class="filaVH">
                    <div class="columnaVH"><img className='sobre' src="./img/imagenCamion.jpg" alt="" /></div>
                    <div class="columnaVH"><img className='uno' src="./img/numero1Logo.png" alt="" /></div>
                </div>
            </div>
            <div class="contenedorIn">
                <div class="filaIn">
                    <div class="columnaIn"><img className='una' src="./img/imagenuna.jpg" alt="Imagen 1" /></div>
                    <div class="columnaIn"><img className='dos' src="./img/imagendos.jpg" alt="Imagen 2" /></div>
                    <div class="columnaIn"><img className='tres' src="./img/imagentres.jpg" alt="Imagen 3" /></div>
                </div>
            </div>
        </>

    );
}

export default VideoVH;
