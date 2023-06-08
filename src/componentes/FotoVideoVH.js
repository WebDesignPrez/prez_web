import React, { useRef } from 'react';

function FotoVideoVH() {
    const boxMarketingRef = useRef(null);

    const handleVideoClick = () => {
        boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div class="contenedor-imagenesVH">
                <video preload="none" autoPlay={true} playsInline={true} controls={false} loop muted class="video1VH"
                    src="./img/VehicentroAtras.mp4"
                    alt="Reel Veinstein"
                    onClick={handleVideoClick}
                >
                    Tu navegador no soporta la etiqueta de video HTML5.
                </video>
                <video preload="none" autoPlay={true} playsInline={true} controls={false} loop muted class="video2VH"
                    src="./img/sinotrukAdelante.mp4"
                    onClick={handleVideoClick}
                    alt="El veridico Sinotrukero"
                >
                    Tu navegador no soporta la etiqueta de video HTML5.
                </video>
            </div>
        </div>
    );
}

export default FotoVideoVH;
