import React, { useRef } from 'react';

function FotoVideoMD() {
    const boxMarketingRef = useRef(null);

    const handleVideoClick = () => {
        boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <span class="lineaMD">¡El Universo Digital, ya no será un misterio. Preparemos motores y comencemos el viaje!</span>
            <div class="contenedor-imagenesMD">
                <img src="./img/imagenIzquierda.jpg" alt="Imagen 1" class="imagen1" />
                <video class="imagen2MD"
                    src="./img/adelante.mp4"
                    autoPlay
                    loop
                    muted
                    style={{ width: '60%', height: '70vw', marginLeft: '22vw' }}
                    onClick={handleVideoClick}
                >
                    Tu navegador no soporta la etiqueta de video HTML5.
                </video>
            </div>
        </div>
    );
}

export default FotoVideoMD;
