function PiePagina(){
    return(
        <>
        {/* <div className="piePagina">
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
        </div> */}
            <footer>
                <div class="footer-container">
                    <div class="columna">
                    <img  className="logoP" src="./img/prez-logo.png" alt="Logo Prez"/>
                        <p><strong>Oficina</strong></p>
                        <p>Ambato</p>
                        <p>Virgen del Sol y Camino al Oriente</p>
                        <p><strong>Atocha</strong></p>
                        <a className="cel" href="tel:0959792827"><strong>Cel: </strong>095 979 2827</a>
                        <div className="social">
                            <a href="https://www.facebook.com/agenciaprez" >
                                <img class="cambiar-imagen-fb" src="./img/fbnegra.png" alt="facebook" />
                            </a>
                            <a href="https://www.instagram.com/prez_agencia/">
                                <img class="cambiar-imagen-insta" src="./img/instanegra.png" alt="instagram" />
                            </a>
                            <a>
                                <img class="cambiar-imagen-in" src="./img/innegra.png" alt="linkedin" />
                            </a>
                        </div>
                    </div>
                    <div class="columna">
                        <h3 className="menos-espacio">Menu</h3>
                        <nav>
                            <ul>
                                <li><a href="#">Principal</a></li>
                                <li><a href="#Servicios">Nuestros Servicios</a></li>
                                <li><a href="#Casos-exito">Casos de éxito</a></li>
                                <li><a href="#Ultimos-casos">Últimos casos</a></li>
                                <li><a href="#Clientes">Clientes que viajan con nosotros</a></li>
                                <li><a href="#Testimonios"> Testimonios</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="columna">
                        <h3>Certificados</h3>
                        <img className="certificadoI" src="./img/meta-logo.webp" alt="Certificado"/>
                    </div>
                </div>
            </footer>
        </>
    )

}
export default PiePagina