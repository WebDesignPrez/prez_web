function PiePaginaFormulario() {
    return (
        <>
            <footer id="footer2">
                <div class="footer-container">
                    <div class="columna">
                        <img className="logoP" src="./img/prezBlanco.png" alt="Logo Prez" />
                        <p>Virgen del Sol y Camino al Oriente</p>
                        <p><strong>Ambato - Ecuador</strong></p>
                        <p>Mas información</p>
                        <p>info@agenciaprez.com</p>
                        <a className="cel" href="tel:0969471122"><strong>Cel: </strong>096 947 1122</a>
                        <div className="social">
                            <a href="https://www.facebook.com/agenciaprez" >
                                <img class="cambiar-imagen-fb" src="./img/FaceVerde.webp" alt="facebook" />
                            </a>

                            <a href="https://www.instagram.com/prez_agencia/">
                                <img class="cambiar-imagen-insta" src="./img/InstaVerde.webp" alt="instagram" />
                            </a>
                            <a>
                                <img class="cambiar-imagen-in" src="./img/InVerde.webp" alt="linkedin" />
                            </a>
                            <a>
                                <img class="cambiar-imagen-tiktok" src="./img/TiktokVerde.webp" alt="tiktok" />
                            </a>
                        </div>
                    </div>
                    <div class="columna">
                        <div class="masEspacio">
                            <h3>Menú</h3>
                            <nav>
                                <ul>
                                    <li><a href="/#">Principal</a></li>
                                    <li><a href="/#Casos-exito">Casos de éxito</a></li>
                                    <li><a href="/#Ultimos-casos">Últimos casos</a></li>
                                    <li><a href="/#Testimonios"> Testimonios</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="columna">
                        <h3><a href="#Servicios">Servicios</a></h3>
                        <nav>
                            <ul>
                                <li><a href="/marketing-digital">Marketing Digital</a></li>
                                <li><a href="/paid-media">Paid Media</a></li>
                                <li><a href="/branding-estratégico">Branding Estratégico</a></li>
                                <li><a href="/desarrollo-web">Desarrollo Web/ e-commerce</a></li>
                                <li><a href="/generacion-leads">Generación de Leads</a></li>
                                <li><a href="/produccion-fotografia-video">Producción, fotográfica, audio y video</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="columna">
                        <h3>Certificados</h3>
                        <img className="certificadoI" src="./img/meta-logo.webp" alt="Certificado" />
                    </div>
                </div>
            </footer>
        </>
    )

}
export default PiePaginaFormulario