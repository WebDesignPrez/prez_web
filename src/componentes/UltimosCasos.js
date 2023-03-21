import LetsTalk from "../componentes/LetsTalk"
import Carousel from 'better-react-carousel'
import React, { useState, useEffect } from 'react';


function UltimosCasos() {

  return (
    < div className="">
      <div className="noresponsive">
        <div className="tituloCasos " id="Ultimos-casos">
          <p>Últimos casos</p>
        </div>
      </div>
      <div className="casosEBox">
        <Carousel
          cols={3}
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
    </div>
  );
}

export default UltimosCasos;