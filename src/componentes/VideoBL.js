import React, { useRef } from 'react';

function VideoBL() {
  const boxMarketingRef = useRef(null);

  const handleVideoClick = () => {
    boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <video
        src="./img/IconoDesarrollo.mp4"
        alt="Video Desarrollo"
        autoPlay
        loop
        muted
        style={{ width: '60%', height: 'auto', marginLeft: '22vw'}}
        onClick={handleVideoClick}
      >
        Tu navegador no soporta la etiqueta de video HTML5.
      </video>
      <div className="abajo">
                <p><span className='fondoV'>BLOG</span>.</p>
            </div>
      <br/>
    </div>
  );
}
export default VideoBL;
