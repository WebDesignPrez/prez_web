import React, { useRef } from 'react';

function FotoVideoDE() {
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
        <img src="./img/imagenIzquierda.jpg" alt="Desarrollo web/ e-comerce atras, Agencia de marketing" class="imagen1" />
        <img src="./img/info.webp" alt="Desarrollo web/ e-comerce atras, Agencia de marketing" class="imagen2" />
        {/* <video preload="none" autoPlay={true} playsInline={true} controls={false} loop muted class="imagen2MD"
          src="./img/adelante.mp4"
          alt="Branding Estratégico adelante"
          style={{ width: '60%', height: '70vw', marginLeft: '22vw' }}
          onClick={handleVideoClick}
        >
          Tu navegador no soporta la etiqueta de video HTML5.
        </video> */}
      </div>
    </div>
  );
}

export default FotoVideoDE;
