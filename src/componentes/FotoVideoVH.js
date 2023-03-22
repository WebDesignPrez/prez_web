import React, { useRef } from 'react';

function FotoVideoVH() {
    const boxMarketingRef = useRef(null);

    const handleVideoClick = () => {
        boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div class="contenedor-imagenesVH">
                <video class="video1VH"
                    src="./img/VehicentroAtras.mp4"
                    autoPlay
                    loop
                    muted
                    onClick={handleVideoClick}
                >
                    Tu navegador no soporta la etiqueta de video HTML5.
                </video>
                <video class="video2VH"
                    src="./img/sinotrukAdelante.mp4"
                    autoPlay
                    loop
                    muted
                    onClick={handleVideoClick}
                >
                    Tu navegador no soporta la etiqueta de video HTML5.
                </video>
            </div>
        </div>
    );
}

export default FotoVideoVH;
