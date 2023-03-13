function PiePagina(){
    return(
        <>
        <div className="piePagina">
            <div className="Info">
                <div className="logoPie">
                    <img src="./img/prez-logo.png" alt="Logo Prez"/>
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
                    <a href="https://www.facebook.com/agenciaprez" >
                        <img class="cambiar-imagen-fb" src="./img/fbnegra.png" alt="facebook"/>
                    </a>
                    <a href="https://www.instagram.com/prez_agencia/"> 
                        <img class="cambiar-imagen-insta"src="./img/instanegra.png" alt="instagram"/>
                    </a>
                    <a>
                        <img class="cambiar-imagen-in"src="./img/innegra.png" alt="linkedin"/>
                    </a>
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
                <img className="metaLogo" src="./img/meta-logo.webp"></img>
            </div>
        </div>
        </>
    )

}
export default PiePagina