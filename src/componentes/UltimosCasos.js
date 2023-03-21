import LetsTalk from "../componentes/LetsTalk"
import Carousel from 'better-react-carousel'
import React, { useState, useEffect } from 'react';


function UltimosCasos() {
  const [numCols, setNumCols] = useState(3); // set the initial number of columns to 3

  // update the number of columns based on the screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // adjust the breakpoint as needed
        setNumCols(1);
      } else {
        setNumCols(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <div className="tituloCasos" id="Ultimos-casos">
        <p>Últimos casos</p>
      </div>
      <div className="casosEBox">
        <Carousel
          cols={numCols}
          rows={1}
          gap={30}
          loop
        >
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/exito1.png" alt="" />
              <p>
                <strong>Conversión</strong> del <br />
                32% para clientes nuevos.
                <a className="flecha" href="">   🡢</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/exito2.png" alt="" />
              <p>
                <strong>Conversión</strong> del <br />
                32% para clientes nuevos.
                <a className="flecha" href="">   🡢</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/exito3.png" alt="" />
              <p>
                <strong>Conversión</strong> del <br />
                32% para clientes nuevos.
                <a className="flecha" href="">   🡢</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img className="enlaceFlecha" width="100%" src="./img/exito1.png" alt="" />
              <p className="enlaceFlecha">
                <strong>Conversión</strong> del <br />
                32% para clientes nuevos.
                <a className="flecha" href="">   🡢</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/exito1.png" alt="" />
              <p>
                <strong>Conversión</strong> del <br />
                32% para clientes nuevos.
                <a className="flecha" href="">   🡢</a>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slideflecha">
              <img width="100%" src="./img/exito1.png" alt="" />
              <p>
                <strong>Conversión
                </strong> del <br />
                32% para clientes nuevos.
                <a className="flecha" href="">   🡢</a>
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <LetsTalk />
    </>
  );
}

export default UltimosCasos;