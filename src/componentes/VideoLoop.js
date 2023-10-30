import React, { useRef } from 'react';

function VideoLoop() {
  const boxMarketingRef = useRef(null);

  const handleVideoClick = () => {
    boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='videoloop '>
      <video preload="none" autoPlay={true} playsInline={true} controls={false} loop muted  className='videoserviciosinicio' src="./img/iconoMarketing.mp4"  alt="Animación Marketing Digital Agencia Marketing Ambato - Prez"  style={{ width: '60%', height: 'auto', marginLeft: '22vw' }}
        onClick={handleVideoClick}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
      <div className="abajo">
        <p>La aventura<span> digital de tu negocio comienza aquí.</span> En nuestro mundo  enfocado en resultados, podrás <span className='fondoV'>viajar en modo automático</span></p>
      </div>
      <div ref={boxMarketingRef} className="boxMarketing">
        <div class="item textservices">
          <p><span>Social Media</span></p>
          <p>Con nuestro enfoque creativo y experiencia en Social Media, podemos aumentar
            su presencia en este universo llamado Internet.</p>
        </div>
        <div class="item imgservices">
          <img src="./img/mk-digital-prez-1.png" alt='Social Media Agencia Marketing Ambato - Prez, Agencia de marketing'/>
        </div>
        <div class="item textservices">
          <p><span>E-mail Marketing</span></p>
          <p>Viajemos al infinito y más allá con estrategias de E-mail Marketing innovadoras y efectivas.</p>
        </div>
        <div class="item imgservices">
          <img src="./img/mk-digital-prez-4.png" alt='E-mail Marketing Agencia Marketing Ambato - Prez, Agencia de marketing'/>
        </div>
        <div class="item textservices">
          <p><span>Inbound Marketing</span></p>
          <p>Atraemos, convertimos y fidelizamos a tu público objetivo con contenido relevante y de calidad.</p>
        </div>
        <div class="item imgservices">
          <img src="./img/mk-digital-prez-2.png" alt='Inbound Marketing Agencia Marketing Ambato - Prez, Agencia de marketing' />
        </div>
        <div class="item textservices">
          <p><span>Marketing de contenidos</span></p>
          <p>Despega tu contenido al espacio exterior y llega a usuarios de alto potencial de compra, por medio de anuncios en motores de búsqueda y redes sociales.</p>
        </div>
        <div class="item imgservices">
          <img src="./img/mk-digital-prez-5.png" alt='Marketing de contenidos Agencia Marketing Ambato - Prez, Agencia de marketing' />
        </div>
        <div class="item textservices">
          <p><span>Analítica Web</span></p>
          <p>A través de la analítica web ayudamos a tomar decisiones basadas en datos y a mejorar la efectividad y el éxito de su sitio web o aplicación móvil.</p>
        </div>
        <div class="item imgservices">
          <img src="./img/mk-digital-prez-3.png" alt='Analítica Web Agencia Marketing Ambato - Prez, Agencia de marketing' />
        </div>
        <div class="item textservices">
          <p><span>SEO</span></p>
          <p>En un universo digital con tanta competencia el SEO, es una opción de una alta probabilidad para tener un gran impacto en el tráfico y la visibilidad de un sitio web por medio de palabras claves correctas y varias estrategias adicionales. </p>
        </div>
        <div class="item imgservices">
          <img src="./img/mk-digital-prez-6.png" alt='SEO Agencia Marketing Ambato - Prez, Agencia de marketing' />
        </div>

      </div>
    </div>
  );
}

export default VideoLoop;
