import React, { useRef } from 'react';

function FotoVideoLE() {
    const boxMarketingRef = useRef(null);

    const handleVideoClick = () => {
        boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className="abajo2">
                <p>¡El <span className='fondoV'>Universo Digital</span>, ya no será un misterio. Preparemos motores y comencemos el viaje!</p>
            </div>
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

export default FotoVideoLE;
