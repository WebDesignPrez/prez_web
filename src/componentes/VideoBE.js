import React, { useRef } from 'react';

function VideoBE() {
    const boxMarketingRef = useRef(null);

    const handleVideoClick = () => {
        boxMarketingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='videoloop '>
            <video className='videoserviciosinicio'
                src="./img/IconoBranding.mp4"
                autoPlay
                loop
                muted
                style={{ width: '60%', height: 'auto', marginLeft: '22vw' }}
                onClick={handleVideoClick}
            >
                Tu navegador no soporta la etiqueta de video HTML5.
            </video>
            <div className="abajo">
                <p>Encontramos<span> lo que le hace única</span> a tu marca y se lo <span className='fondoV'>contamos al mundo</span>.</p>
            </div>
            <br />
            <div ref={boxMarketingRef} class=" boxMarketing">
                <div class="item textservices">
                    <p><span>Creación de marca</span></p>
                    <p>Tu marca en el centro del universo, representamos la esencia de tu empresa y conectamos emocionalmente con tu público objetivo.</p>
                </div>
                <div class="item imgservices">
                    <img src="./img/be4.png" />
                </div>
                <div class="item textservices">
                    <p><span>Rebranding</span></p>
                    <p>El rebranding es una estrategia de marteking que consiste en el cambio de nombre o marca, ya sea realizando
                        una variación del original o cambiando por completo a uno nuevo con el objetivo de mejorar el posicionamiento
                        de la marca.</p>
                </div>
                <div class="item imgservices">
                    <img src="./img/be3.png" />
                </div>
                <div class="item textservices">
                    <p><span>Estrategia</span></p>
                    <p>La creación de percepción positiva a través de la estrategia está en un nivel más profundoi, en el que el clientes
                        se identifica no solo con el estilo, sino también con las creencias de la marca lo que hace una conexión más fuerte.</p>
                </div>
                <div class="item imgservices">
                    <img src="./img/be1.png" />
                </div>
                <div class="item textservices">
                    <p><span>Personalidad de la marca</span></p>
                    <p>¿Tu marca tiene personalidad? ¿Cuáles son sus cualidades? ¿Qué es lo que la define? Y si fiera una persona, ¿cómo seria?
                        Esas preguntas ayudan a crear una imagen mental más clara.</p>
                </div>
                <div class="item imgservices">
                    <img src="./img/be2.png" />
                </div>
                <div class="item textservices">
                    <p><span>Tono de voz</span></p>
                    <p>¿Cómo es el lenguaje de tu marca? ¿Es divertido? ¿Es especializado? Lo que necesitas es alinear tu lenguaje a tu
                        público. Busca cuáles son las palabras que ellos usan.</p>
                </div>
                <div class="item imgservices">
                    <img src="./img/be5.png" />
                </div>
            </div>
        </div>
    );
}

export default VideoBE;
