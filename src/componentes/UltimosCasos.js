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
        <div className="casosEBox ">
          <Carousel cols={3} rows={1} gap={30} loop>
            <Carousel.Item>
              <img width="100%" src="./img/exito1.png" alt="" />
              <p>
                <strong>Conversión</strong> del <br />
                32% para clientes nuevos.
                <span></span>
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="./img/exito2.png" alt="" />
              <p>
                <strong>Conversión</strong> del <br />
                32% para clientes nuevos.
                <span></span>
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="./img/exito3.png" alt="" />
              <p>
                <strong>Conversión</strong> del <br />
                32% para clientes nuevos.
                <span></span>
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="./img/exito1.png" alt="" />
              <p>
                <strong>Conversión</strong> del <br />
                32% para clientes nuevos.
                <span></span>
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="./img/exito1.png" alt="" />
              <p>
                <strong>Conversión</strong> del <br />
                32% para clientes nuevos.
                <span></span>
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="./img/exito1.png" alt="" />
              <p>
                <strong>Conversión
                </strong> del <br />
                32% para clientes nuevos.
                <span></span>
              </p>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="responsive">
        <div className="tituloCasos " id="Ultimos-casos">
          <p>Últimos casos</p>
        </div>
        <div className="casosEBox">
          <Carousel cols={1} rows={1} gap={10} loop>
            <Carousel.Item>
              <img width="100%" src="./img/exito1.png" alt="" />

            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="./img/exito2.png" alt="" />

            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="./img/exito3.png" alt="" />

            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="./img/exito1.png" alt="" />

            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="./img/exito1.png" alt="" />

            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="./img/exito1.png" alt="" />

            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <LetsTalk />
    </div>
  );
}

export default UltimosCasos;