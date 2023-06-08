import React from "react";
import Slider from "react-slick";
import Servicios from '../componentes/Servicios';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
var single = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
}

const Slide = ({ imgSrc, altText, mainCaption, subCaption, linkTo }) => (
  <div className="box-slider">
  <a href={linkTo}>
      <div className="box">
          <img className="imgBoxSlider" src={imgSrc} alt={altText} />
          <div className="tituloBox">
              {mainCaption}
          </div>
          <div className="descBox">
              {subCaption}
              <a className="flechaConoceMas" href={linkTo}>   →</a>
          </div>
      </div>
  </a>
</div>
);

const ConoceMasPM = () => (
  <>
    <div className="slider-wrapper noresponsive">

      <Slider {...settings}>
        <Slide
          imgSrc="./img/serv1.png"
          altText="Marketing Digital Agencia Marketing Ambato - Prez"
          mainCaption="Marketing Digital"
          subCaption="La aventura digital de tu negocio comienza aquí. En nuestro mundo enfocado en resultados, podrás viajar en modo automático."
          linkTo="/marketing-digital"
        />
        <Slide
          imgSrc="./img/serv3.png"
          altText="Branding Estratégico Agencia Marketing Ambato - Prez"
          mainCaption="Branding Estratégico"
          subCaption="Encontramos lo que te hace único y se lo contamos al mundo."
          linkTo="/branding-estratégico"
        />
        <Slide
          imgSrc="./img/serv4.png"
          altText="Desarrollo Web / e-commerce Agencia Marketing Ambato - Prez"
          mainCaption="Desarrollo Web / e-commerce"
          subCaption="Desarrollamos un sitio web funcional, elegante y vendedor para tu empresa"
          linkTo="/desarrollo-web"
        />
        <Slide
          imgSrc="./img/generacionleads.png"
          altText="Generación de Leads Agencia Marketing Ambato - Prez"
          mainCaption="Generación de Leads"
          subCaption="Estrategias de redes sociales para alcanzar y convertir nuevos clientes"
          linkTo="/generacion-leads"
        />
        <Slide
          imgSrc="./img/serv6.png"
          altText="Producción fotográfica, audio y video Agencia Marketing Ambato - Prez"
          mainCaption="Producción fotográfica, audio y video"
          subCaption="Desarrollo, producción y post producción de fotografías, videos y piezas audiovisuales."
          linkTo="/produccion-fotografia-video"
        />
      </Slider>
    </div>

    <div className="responsive">
      <Servicios />
    </div>

  </>
);

export default ConoceMasPM;