import Carousel from 'better-react-carousel'
import { useState, useEffect, useRef } from "react";

let clientes = [
    "./img/logos/veicentro-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/uniandes-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/cebi-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/speedy-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/alis-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/venus-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/avipaz-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/vozandes-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/gad-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/hcjb-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/deone-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/uninova-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/ctt-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/crediya-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/foodstation-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/sac-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/salguero-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/produtexti-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/maxilarface-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/fastchicken-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/gidsa-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/crehvital-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/micaserita-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/ecuapisos-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/centrobus-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/apetit-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/carloslarrea-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/mm-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/pollolisto-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/multirepcar-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/vaes-cliente-agencia-de-marketing-prez.webp",
    "./img/logos/drjuanpavargas-cliente-agencia-de-marketing-prez.webp"
]



let logos = clientes.map(function (cliente) {
    return <Carousel.Item>
        <img width="100%" src={cliente} />
    </Carousel.Item>
})

function Clientes() {
    return (
        < div >
            <div className="clientesTitulo" id="Clientes">
                <h3>Clientes que viajan <br></br>con nosotros</h3>
            </div>
            <div className="clientesBox noresponsive">
                <Carousel cols={5} rows={3} gap={10} autoplay={2550} interval={200} loop>
                    {logos}
                </Carousel>
            </div>

            <div className="clientesBox responsive">
                <Carousel cols={1} rows={1} gap={0} autoplay={1650} interval={200} loop={true}>
                    {logos}
                </Carousel>
            </div>

        </div>
    )
}
export default Clientes
