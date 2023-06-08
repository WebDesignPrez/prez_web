import React, { useRef } from 'react';

function VideoFO() {
  const boxMarketingRef = useRef(null);

  const handleVideoClick = () => {
    boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='videoloop'>
      <video preload="none" autoPlay={true} playsInline={true} controls={false} loop muted className='videoserviciosinicio'
        src="./img/IconoFotosVideos.mp4"
        alt="Animación Prodección fotografia, audio y video Agencia Marketing Ambato - Prez"
        style={{ width: '60%', height: 'auto', marginLeft: '22vw' }}
        onClick={handleVideoClick}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
      <div className="abajo">
        <p>Desarrollo, <span>producción y post producción</span> de fotografías, videos y <span className='fondoV'>piezas audiovisuales</span>.</p>
          <br/>
      </div>
      <div class="boxMarketingFO">
        <div class="item textservices">
          <p><span>Producción de fotografía</span></p>
          <p>Crea una conexión emocional con tu audiencia a través de imágenes de alta calidad y estilo visual único.
          </p>
        </div>
        <div class="item imgservices">
          <img src="./img/fo1.png"  alt="Producción de fotografía Agencia Marketing Ambato - Prez" />
        </div>
        <div class="item textservices">
          <p><span>Producción de video</span></p>
          <p>Crea contenido audiovisual que cuente la historia de tu marca y genere una mayor conexión con tu audiencia con nuestro servicio de Producción de video, diseñado para destacar en este universo digital.</p>
        </div>
        <div class="item imgservices">
          <img src="./img/fo2.png" alt="Producción de video Agencia Marketing Ambato - Prez" />
        </div>
        <div class="item textservices">
          <p><span>Audiomarketing</span></p>
          <p>Convierte tu marca en una experiencia sonora única y diferenciada con nuestro servicio de Audiomarketing, diseñado para destacar en el mercado auditivo.</p>
        </div>
        <div class="item imgservices">
          <img src="./img/fo3.png" alt="Audiomarketing Agencia Marketing Ambato - Prez" />
        </div>
      </div>
    </div>
  );
}

export default VideoFO;