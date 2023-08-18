import React, { useRef } from 'react';

function VideoHome() {
    const boxMarketingRef = useRef(null);
    const handleVideoClick = () => {
        boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
      };


  return (
    <>
    <div className='boxVideoInicio ocultar-en-escritorio'>
    <div className='videoloop'>
      <video preload="none" autoPlay={true} playsInline={true} controls={false} loop muted className='videoserviciosinicio'
        src="./img/videoInicio.mp4"
        alt="Video Equipo Prez Agencia de Marketing Ambato Ecuador"
        style={{ width: '75%', height: 'auto', marginLeft: '22vw' }}
        onClick={handleVideoClick}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
    </div>
  </div>
  <div className='boxVideoInicio'>
    <div className="videoInicio noresponsive">
      <video
        src="./img/videoInicio.mp4"
        alt="Video Equipo Prez Agencia de Marketing Ambato Ecuador"
        autoPlay
        loop
        muted
        style={{}}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
    </div>
  </div>
  </>
  );
}

export default VideoHome;
