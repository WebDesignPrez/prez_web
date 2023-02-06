function PiePagina(){
    return(
        <>
        <div className="piePagina">
            <div className="Info">
                <div className="logoPie">
                    <img src="./img/logo.png" alt="Logo Prez"/>
                    <p className="titulo">
                        Oficina
                    </p>
                    <p className="desc">Ambato</p>
                    <p className="desc">Virgen del Sol y Camino al Oriente</p>
                    <p className="titulo">
                        Atocha
                    </p>
                    <a className="desc" href="tel:0959792827"><strong>Cel: </strong>095 979 2827</a>
                    <div className="social">
                        <img src="./img/facebook.png" alt="facebook"/>
                        <img src="./img/instagram.png" alt="instagram"/>
                        <img src="./img/linked.png" alt="linkedin"/>
                    </div>
                </div>
            </div>
            <div className="menu">
                <p className="titulo">
                    Menú
                </p>
                <ul>
                    <li>
                        Principal
                    </li>
                    <li>
                        Nuestros Servicios 
                    </li>
                    <li>
                        Casos de éxito
                    </li>
                    <li>
                        Últimos casos
                    </li>
                    <li>
                        Clientes que viajan con nosotros
                    </li>
                    <li>
                        Testimonios
                   </li>
                </ul>
            </div>
            <div className="cetificado">
                    <p className="titulo">
                        Certificados
                    </p>
                <img src="./img/certificado.png"></img>
            </div>
        </div>
        </>
    )

}
export default PiePagina