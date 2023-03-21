import React, { useRef } from 'react';

function VideoLE() {
  const boxMarketingRef = useRef(null);

  const handleVideoClick = () => {
    boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <video
        src="./img/iconoLeads.mp4"
        autoPlay
        loop
        muted
        style={{ width: '60%', height: 'auto', marginLeft: '22vw'}}
        onClick={handleVideoClick}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
      <div className="abajo">
                <p>Estrategias de<span> redes sociales para alcanzar</span> y convertir <span className="fondoV">nuevos clientes</span>.</p>
            </div>
            <br/>
            <div class="boxMarketingLE">
                <div class="item">
                    <p><span>Captación de leads</span></p>
                    <p>Desarrollamos estrategias enfocadas en llamar la atención de tu audencia y obtener los datos necesarios.
                    </p>
                </div>
                <div class="item">
                    <img src="./img/le1.png" />
                </div>
                <div class="item">
                    <p><span>Centralización y segmentación de contactos CRM</span></p>
                    <p>El rebranding es una estrategia de marteking que consiste en el cambio de nombre o marca, ya sea realizando
                        una variación del original o cambiando por completo a uno nuevo con el objetivo de mejorar el posicionamiento
                        de la marca.</p>
                </div>
                <div class="item">
                    <img src="./img/le2.png" />
                </div>
            </div>
    </div>
  );
}

export default VideoLE;
