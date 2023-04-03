import React, { useRef } from 'react';

function VideoDE() {
  const boxMarketingRef = useRef(null);

  const handleVideoClick = () => {
    boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='videoloop '>
      <video  preload="none" autoPlay={true} playsInline={true} controls loop muted className='videoserviciosinicio'
        src="./img/IconoDesarrollo.mp4"
        style={{ width: '60%', height: 'auto', marginLeft: '22vw'}}
        onClick={handleVideoClick}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
      <div className="abajo">
                <p>Desarrollamos<span> un sitio web funcional</span>, elegante y vendedor <span className='fondoV'>para tu empreasa</span>.</p>
            </div>
            <br/>
            <div ref={boxMarketingRef}  class="boxMarketing">
                <div class="item textservices">
                    <p><span>Diseño y desarrollo Web</span></p>
                    <p>Una marca es una identificación, que cuando se habla de aspectos comerciales, es la que representa una identidad
                        simbólica de una empresa, producto o servicio, es decir el activo intangible más importante de la empresa.
                    </p>
                </div>
                <div class="item imgservices">
                    <img src="./img/de1.png" />
                </div>
                <div class="item textservices">
                    <p><span>E-commerce</span></p>
                    <p>No hay límites para lo que puedes vender en línea con nuestro servicio de E-commerce, "Crea una experiencia de compra en línea de otro mundo diseñado para cautivar a tus clientes."</p>
                </div>
                <div class="item imgservices">
                    <img src="./img/de2.png" />
                </div>
                <div class="item textservices">
                    <p><span>Apps Android / IOS</span></p>
                    <p>Desarrolla aplicaciones móviles de alto rendimiento y calidad con nuestro servicio de Apps, que te brinda la posibilidad de destacar en el universo móvil.</p>
                </div>
                <div class="item imgservices">
                    <img src="./img/de3.png" />
                </div>
            </div>
    </div>
  );
}

export default VideoDE;
