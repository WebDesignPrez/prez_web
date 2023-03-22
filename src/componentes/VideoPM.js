import React, { useRef } from 'react';

function VideoPM() {
    const boxMarketingRef = useRef(null);

    const handleVideoClick = () => {
        boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='videoloop'>
            <video className='videoserviciosinicio'
                src="./img/IconoPaidMedia.mp4"
                autoPlay
                loop
                muted
                style={{ width: '60%', height: 'auto', marginLeft: '22vw' }}
                onClick={handleVideoClick}
            >
                Tu navegador no soporta la etiqueta de video HTML5.
            </video>
            <div className="abajo">
                <p>Tu<span> marca brillará </span> aún más con estrategias de pago en todo el <span className='fondoV'>ecosistema digital</span>.</p>
            </div>
            <br />
            <div ref={boxMarketingRef} class="pmedia boxMarketing">
                <div class="item textservices">
                    <p><span>SEM</span></p>
                    <p>El arma perfecta para conseguir ventas, leads, notariedad de marca</p>
                </div>
                <div class="item imgservices">
                    <img src="./img/pm1.png" />
                </div>

                <div class="item textservices">
                    <p><span>Social ADS</span></p>
                    <p>Desarrollo de campañas para Social ads, en las que se promocionan tus productos o servicios de forma personalizada.</p>
                    <div className='image-row'>
                        <img src="./img/pms1.png" />
                        <img src="./img/pms2.png" />
                        <img src="./img/pms3.png" />
                        <img src="./img/pms4.png" />
                        <img src="./img/pms5.png" />
                    </div>
                </div>
                <div class="item imgservices">
                    <img src="./img/pm2.png" />
                </div>
            </div>
        </div>
    );
}

export default VideoPM;
