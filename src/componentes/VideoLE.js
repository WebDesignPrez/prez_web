import React, { useRef } from 'react';

function VideoLE() {
  const boxMarketingRef = useRef(null);

  const handleVideoClick = () => {
    boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <video
        src="./img/iconoMarketing.mp4"
        autoPlay
        loop
        muted
        style={{ width: '60%', height: 'auto', marginLeft: '22vw'}}
        onClick={handleVideoClick}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
      <div className="abajo">
                <p className="primera">La aventura<span> digital de tu negocio comienza aquí.</span> En nuestro mundo  enfocado en resultados, podrás viajar en modo automático</p>
            </div>
      <div ref={boxMarketingRef} className="boxMarketing">
        
           <div class="item">
           <p><span>Social</span></p>
           <p><span>Media</span></p>
           <p>Con nuestro enfoque creativo y experiencia en Social Media, po- demos aumentar
               su presencia en este universo llamado Internet.</p>
       </div>
       <div class="item">
           <img src="./img/mk-digital-prez-1.png" />
       </div>
       <div class="item">
           <p><span>E-mail</span></p>
           <p><span>Marketing</span></p>
           <p>Viajemos al infinito y más allá con estrategias de E-mail Marketing innovadoras y efectivas.</p>
       </div>
       <div class="item">
           <img src="./img/mk-digital-prez-4.png" />
       </div>
       <div class="item">
           <p><span>Inbound</span></p>
           <p><span>Marketing</span></p>
           <p>Atraemos, convertimos y fideliza- mos a tu público objetivo con con- tenido relevante y de calidad.</p>
       </div>
       <div class="item">
           <img src="./img/mk-digital-prez-2.png" />
       </div>
       <div class="item">
           <p><span>Marketing de</span></p>
           <p><span>contenidos</span></p>
           <p>Despega tu contenido al espacio exterior y llega a usuarios de alto potencial de compra, por medio de anuncios en motores de bús- queda y redes sociales.</p>
       </div>
       <div class="item">
           <img src="./img/mk-digital-prez-5.png" />
       </div>
       <div class="item">
           <p><span>Analitica</span></p>
           <p><span>Web</span></p>
           <p>A través de la analítica web ayu- damos a tomar decisiones basa- das en datos y a mejorar la efec- tividad y el éxito de su sitio web o aplicación móvil.</p>
       </div>
       <div class="item">
           <img src="./img/mk-digital-prez-3.png" />
       </div>
       <div class="item">
           <p><span>SEO</span></p>
           <p>En un universo digital con tanta competencia el SEO, es una op- ción de una alta probabilidad para tener un gran impacto en el trá- fico y la visibilidad de un sitio web por medio de palabras claves co- rrectas y varias estrategias adicio- nales. </p>
       </div>
       <div class="item">
           <img src="./img/mk-digital-prez-6.png" />
       </div>
        
      </div>
    </div>
  );
}

export default VideoLE;
