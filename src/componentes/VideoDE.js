import React, { useRef } from 'react';

function VideoDE() {
  const boxMarketingRef = useRef(null);

  const handleVideoClick = () => {
    boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <video
        src="./img/IconoDesarrollo.mp4"
        autoPlay
        loop
        muted
        style={{ width: '60%', height: 'auto', marginLeft: '22vw'}}
        onClick={handleVideoClick}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
      <div className="abajo">
                <p>Desarrollamos<span> un sitio web funcional</span>, elegante y vendedor <span className='fondoV'>para tu empreasa</span>.</p>
            </div>
            <br/>
            <div class="boxMarketingDE">
                <div class="item">
                    <p><span>Diseño y</span></p>
                    <p><span>desarrollo Web</span></p>
                    <p>Una marca es una identificación, que cuando se habla de aspectos comerciales, es la que representa una identidad
                        simbólica de una empresa, producto o servicio, es decir el activo intangible más importante de la empresa.
                    </p>
                </div>
                <div class="item">
                    <img src="./img/de1.png" />
                </div>
                <div class="item">
                    <p><span>E-commerce</span></p>
                    <p>El rebranding es una estrategia de marteking que consiste en el cambio de nombre o marca, ya sea realizando
                        una variación del original o cambiando por completo a uno nuevo con el objetivo de mejorar el posicionamiento
                        de la marca.</p>
                </div>
                <div class="item">
                    <img src="./img/de2.png" />
                </div>
                <div class="item">
                    <p><span>Apps Android / IOS</span></p>
                    <p>La creación de percepción positiva a través de la estrategia está en un nivel más profundoi, en el que el clientes
                        se identifica no solo con el estilo, sino también con las creencias de la marca lo que hace una conexión más fuerte.</p>
                </div>
                <div class="item">
                    <img src="./img/de3.png" />
                </div>
            </div>
    </div>
  );
}

export default VideoDE;
