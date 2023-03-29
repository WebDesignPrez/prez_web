import LetsTalk from "../componentes/LetsTalk"
import Carousel from 'better-react-carousel'
import styles from '../carusel.css';

function UltimosCasos() {

  return (
    < div className="">
      <div className="">
        <div className="tituloCasos " id="Ultimos-casos">
          <p>Últimos casos</p>
        </div>
      </div>
      <div className="casosEBox noresponsive">
        <Carousel
          cols={3}
          rows={1}
          gap={30}
          loop
        >
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/spe.jpg" alt="" />
              <p>
              <strong>Speedy Internet</strong>, marca con presencia en 5 provincias de Ecuador. <br/>
                <strong>Conversión</strong> de clientes potenciales hasta el 32%.
                <a className="flecha" href="">   →</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/home/admisiones-cebi.webp" alt="" />
              <p>
              <strong>CEBI</strong>, Unidad educativa de alto rendimiento, <strong>Incremento de engagement</strong> en la comunidad Cebiniana y manejo de prospectos para Admisiones <br/>2023
                <a className="flecha" href="">   →</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/home/salguero-creditos.webp" alt="" />
              <p>
              Generación de clientes potenciales, <strong>48 ventas</strong> a través del canal digital en el transcurso de un año y medio.
                <a className="flecha" href="">   →</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img className="enlaceFlecha" width="100%" src="./img/musica.jpg" alt="" />
              <p className="enlaceFlecha">
              100k suscriptores, <strong>VAES</strong> agrupación internacional de música gospel. Manejo de imagen y estrategias de Growth.
                <a className="flecha" href="">   →</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/home/alis.webp" alt="" />
              <p>
              <strong>Ali´s Parrilladas y Pizzería</strong>. Creación de contenido para redes sociales.
                <a className="flecha" href="">   →</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/uniandes.jpg" alt="" />
              <p>
              <strong>UNIANDES</strong>, Una de las universidades más grandes del País. Generación de clientes potenciales para Pregrados y Postgrados a nivel nacional
                <a className="flecha" href="">   →</a>
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="casosEBox responsive">
        <Carousel
          cols={1}
          rows={1}
          gap={10}
          loop
        >
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/exito1.png" alt="" />

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/exito2.png" alt="" />

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/exito3.png" alt="" />

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img className="enlaceFlecha" width="100%" src="./img/exito1.png" alt="" />

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/exito1.png" alt="" />

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/exito1.png" alt="" />

            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <LetsTalk />
    </div>
  );
}

export default UltimosCasos;