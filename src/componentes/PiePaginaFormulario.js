function PiePaginaFormulario() {
  return (
    <>
      <footer id="footer2">
        <div class="footer-container">
          <div class="columna">
            <img className="logoP" src="./img/prezBlanco.png" alt="Logo Agencia Marketing Ambato - Prez, Agencia de marketing" />
            <h1 className="footerh1">Agencia de Marketing</h1>
            <p>Virgen del Sol y Camino al Oriente</p>
            <p><strong>Ambato - Ecuador</strong></p>
            <p>Mas información</p>
            <p>info@agenciaprez.com</p>
            <a className="cel" href="tel:0959792827"><strong>Cel: </strong>095 979 2827</a>
            <div className="social">
              <a href="https://www.facebook.com/agenciaprez" >
                <img class="cambiar-imagen-fb" src="./img/FaceVerde.webp" alt="Logo facebook negro, Agencia de marketing" />
              </a>

              <a href="https://www.instagram.com/prez_agencia/">
                <img class="cambiar-imagen-insta" src="./img/InstaVerde.webp" alt="Logo instagram negro, Agencia de marketing" />
              </a>
              <a>
                <img class="cambiar-imagen-in" src="./img/InVerde.webp" alt="Logo linkedin negro, Agencia de marketing" />
              </a>
              <a>
                <img class="cambiar-imagen-tiktok" src="./img/TiktokVerde.webp" alt="Logo tiktok negro, Agencia de marketing" />
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
                  <li><a href="/blog"> Blogs</a></li>
                  {/*  <li><a href="/about-us"> About Us</a></li> */}
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

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'start',
              gap: '10px',
              flexWrap: 'wrap',

            }}>
              <img className="certificadoI" src="./img/meta-logo.webp" alt="Certificado Meta Agencia Marketing Ambato - Prez, Agencia de marketing" />
              <img className="certificadoI" src="./img/partnerNewLogo.png" alt="Certificado Meta Agencia Marketing Ambato - Prez, Agencia de marketing" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )

}
export default PiePaginaFormulario