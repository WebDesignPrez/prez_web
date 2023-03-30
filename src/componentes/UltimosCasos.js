import LetsTalk from "../componentes/LetsTalk"
import Carousel from 'better-react-carousel'
import Carousel2 from 'react-bootstrap/Carousel';
import styles from '../carusel.css';


let clientes = [
  {
    id: 1,
    url: "#",
    imagen: "./img/spe.jpg",
    descripcion: <p><b>Speedy Internet</b>, marca con presencia en 5 provincias de Ecuador. <br />
      <strong>Conversión</strong> de clientes potenciales hasta el 32%.</p>
  },
  {
    id: 2,
    url: "#",
    imagen: "./img/home/admisiones-cebi.webp",
    descripcion: <p><strong>CEBI</strong>, Unidad educativa de alto rendimiento, <strong>Incremento de engagement</strong> en la comunidad Cebiniana y manejo de prospectos para Admisiones <br />2023</p>
  },
  {
    id: 3,
    url: "#",
    imagen: "./img/home/salguero-creditos.webp",
    descripcion: <p>Generación de clientes potenciales, <strong>48 ventas</strong> a través del canal digital en el transcurso de un año y medio.</p>
  },
  {
    id: 4,
    url: "#",
    imagen: "./img/musica.jpg",
    descripcion: <p>100k suscriptores, <strong>VAES</strong> agrupación internacional de música gospel. Manejo de imagen y estrategias de Growth.</p>
  },
  {
    id: 5,
    url: "#",
    imagen: "./img/home/alis.webp",
    descripcion: <p><strong>Ali's Parrilladas y Pizzería</strong>. Creación de contenido para redes sociales.</p>
  },
  {
    id: 6,
    url: "#",
    imagen: "./img/uniandes.jpg",
    descripcion: <p><strong>UNIANDES</strong>, Una de las universidades más grandes del País. Generación de clientes potenciales para Pregrados y Postgrados a nivel nacional</p>
  }
]

console.log(clientes[5].id)

function UltimosCasos() {

  return (
    <>
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
              <img width="100%" src={clientes[0].imagen} alt="" />
              <p>
                {clientes[0].descripcion}
                <a className="flecha" href={clientes[0].url}>   →</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src={clientes[1].imagen} alt="" />
              <p>
                {clientes[1].descripcion}
                <a className="flecha" href={clientes[1].url}>   →</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src={clientes[2].imagen} alt="" />
              <p>
                {clientes[2].descripcion}
                <a className="flecha" href={clientes[2].url}>   →</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img className="enlaceFlecha" width="100%" src={clientes[3].imagen} alt="" />
              <p className="enlaceFlecha">
                {clientes[3].descripcion}
                <a className="flecha" href={clientes[3].url}>   →</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src={clientes[4].imagen} alt="" />
              <p>
                {clientes[4].descripcion}
                <a className="flecha" href={clientes[4].url}>   →</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src={clientes[5].imagen} alt="" />
              <p>
                {clientes[5].descripcion}
                <a className="flecha" href={clientes[5].url}>   →</a>
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>


      {/*Segundo carusel*/}
      <div className="margencarusel responsive ultimoscasoscarusel">
        <Carousel2 interval={3000} className={styles}>
          <Carousel2.Item >
            <img
              className="d-block w-100"
              src={clientes[0].imagen}
              alt="First slide"
            />
            <Carousel2.Caption>
              {clientes[0].descripcion}
              <div class="imagen-padre">
                <img src="./img/flechaBlancaListo.webp" alt="Imagen 1" class="imagen1B" />
              </div>
            </Carousel2.Caption>
          </Carousel2.Item>

          <Carousel2.Item >
            <img
              className="d-block w-100"
              src={clientes[1].imagen}
              alt="Second slide"
            />
            <Carousel2.Caption>
              {clientes[1].descripcion}
              <div class="imagen-padre">
                <img src="./img/flechaBlancaListo.webp" alt="Imagen 1" class="imagen1B" />
              </div>
            </Carousel2.Caption>
          </Carousel2.Item>

          <Carousel2.Item >
            <img
              className="d-block w-100"
              src={clientes[2].imagen}
              alt="Third slide"
            />
            <Carousel2.Caption>
              {clientes[2].descripcion}
              <div class="imagen-padre">
                <img src="./img/flechaBlancaListo.webp" alt="Imagen 1" class="imagen1B" />
              </div>
            </Carousel2.Caption>
          </Carousel2.Item>

          <Carousel2.Item >
            <img
              className="d-block w-100"
              src={clientes[3].imagen}
              alt="Fourth slide"
            />
            <Carousel2.Caption>
              {clientes[3].descripcion}
              <div class="imagen-padre">
                <img src="./img/flechaBlancaListo.webp" alt="Imagen 1" class="imagen1B" />
              </div>
            </Carousel2.Caption>
          </Carousel2.Item>

          <Carousel2.Item >
            <img
              className="d-block w-100"
              src={clientes[4].imagen}
              alt="Fifth slide"
            />
            <Carousel2.Caption>
              {clientes[4].descripcion}
              <div class="imagen-padre">
                <img src="./img/flechaBlancaListo.webp" alt="Imagen 1" class="imagen1B" />
              </div>
            </Carousel2.Caption>
          </Carousel2.Item>

          <Carousel2.Item >
            <img
              className="d-block w-100"
              src={clientes[5].imagen}
              alt="Susxth slide"
            />
            <Carousel2.Caption>
              {clientes[5].descripcion}
              <div class="imagen-padre">
                <img src="./img/flechaBlancaListo.webp" alt="Imagen 1" class="imagen1B" />
              </div>
            </Carousel2.Caption>
          </Carousel2.Item>
        </Carousel2>
      </div>
    </>
  );
}

export default UltimosCasos;

