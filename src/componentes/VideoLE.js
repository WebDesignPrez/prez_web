import React, { useRef } from 'react';

function VideoLE() {
  const boxMarketingRef = useRef(null);

  const handleVideoClick = () => {
    boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='videoloop '>
      <video className='videoserviciosinicio'
        src="./img/iconoLeads.mp4"
        autoPlay
        loop
        muted
        style={{ width: '60%', height: 'auto', marginLeft: '22vw' }}
        onClick={handleVideoClick}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
      <div className="abajo">
        <p>Estrategias de<span> redes sociales para alcanzar</span> y convertir <span className="fondoV">nuevos clientes</span>.</p>
      </div>
      <br />
      <div class="boxMarketing onecol">
        <div class="item textservices">
          <p><span>Captación de leads</span></p>
          <p>Desarrollamos estrategias enfocadas en llamar la atención de tu audencia y obtener los datos necesarios.
          </p>
        </div>
        <div class="item imgservices">
          <img src="./img/le1.png" />
        </div>
        <div class="item textservices">
          <p><span>Centralización y segmentación de contactos CRM</span></p>
          <p>Optimiza la gestión de tus contactos y mejora la segmentación de tu audiencia centralizando toda la información en un solo lugar.</p>
        </div>
        <div class="item imgservices">
          <img src="./img/le2.png" />
        </div>
      </div>
    </div>
  );
}

export default VideoLE;
