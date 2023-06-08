import { useEffect } from 'react';

function FornularioBitrix() {

    function loadBitrix24Script() {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://cdn.bitrix24.es/b25221909/crm/form/loader_17.js?' + (Date.now() / 180000 | 0);
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    }

    useEffect(() => {
        loadBitrix24Script();
    }, []);

    return (
        <div class="containerFor">
            <div class="column-leftFor">
                <div className="tituloFormulario" >
                    <div className="iconotituloizquierda">
                    </div>
                    <div>
                        <p>¿Listo para hablar</p>
                        <p><span>con nosotros?</span></p>
                    </div>
                </div>
                <div className='formularioBi'>
                    <script data-b24-form="inline/17/7w3qu8" data-skip-moving="true"></script>
                </div>
            </div>
            <div class="column-rightFor">
                <video
                    src="./img/adelante.mp4"
                    alt="video Formulario"
                    autoPlay
                    loop
                    muted
                >
                    Tu navegador no soporta la etiqueta de video HTML5.
                </video>
            </div>
        </div>
    );
}

export default FornularioBitrix;
