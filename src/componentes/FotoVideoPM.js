import React, { useRef } from 'react';

function FotoVideoPM() {
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
                <img src="./img/imagenIzquierda.jpg" alt="Paid Media atras" class="imagen1" />
                <video preload="none" autoPlay={true} playsInline={true} controls={false} loop muted class="imagen2MD" src="./img/adelante.mp4" 
                    style={{ width: '60%', height: '70vw', marginLeft: '22vw' }}
                    onClick={handleVideoClick}
                    alt="Branding Estratégico adelante"
                >
                    Tu navegador no soporta la etiqueta de video HTML5.
                </video>
            </div>
        </div>
    );
}

export default FotoVideoPM;
