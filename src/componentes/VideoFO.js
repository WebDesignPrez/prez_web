import React, { useRef } from 'react';

function VideoFO() {
  const boxMarketingRef = useRef(null);

  const handleVideoClick = () => {
    boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <video
        src="./img/IconoFotosVideos.mp4"
        autoPlay
        loop
        muted
        style={{ width: '60%', height: 'auto', marginLeft: '22vw' }}
        onClick={handleVideoClick}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
      <div className="abajo">
        <p>Desarrollo<span>, produccion y post produccion</span> de fotografías, videos y <span className='fondoV'>piezas audiovisuales</span>.</p>
          <br/>
      </div>
      <div class="boxMarketing">
        <div class="item">
          <p><span>Producción de</span></p>
          <p><span>fotografía</span></p>
          <p>Desarrollamos estrategias enfocadas en llamar la atención de tu audencia y obtener los datos necesarios.
          </p>
        </div>
        <div class="item">
          <img src="./img/fo1.png" />
        </div>
        <div class="item">
          <p><span>Centralización y</span></p>
          <p><span>segmentación de</span></p>
          <p><span>contactos CRM</span></p>
          <p>El rebranding es una estrategia de marteking que consiste en el cambio de nombre o marca, ya sea realizando
            una variación del original o cambiando por completo a uno nuevo con el objetivo de mejorar el posicionamiento
            de la marca.</p>
        </div>
        <div class="item">
          <img src="./img/fo2.png" />
        </div>
        <div class="item">
          <p><span>Captación de</span></p>
          <p><span>leads</span></p>
          <p>Desarrollamos estrategias enfocadas en llamar la atención de tu audencia y obtener los datos necesarios.
          </p>
        </div>
        <div class="item">
          <img src="./img/fo3.png" />
        </div>
      </div>
    </div>
  );
}

export default VideoFO;
