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
  <div className="slide-container">
    <a href={linkTo}>
      <div className="arriba">
        <img className="slider-image" src={imgSrc} alt={altText} width="360vw" />
        <div className="slide-caption"></div>
        <div className="tituloMain">
          <p className="main-caption">{mainCaption}</p>
        </div>
        <p className="sub-caption">{subCaption}</p>
      </div>
      <div class="imagen-padreSlider">
        <img src="./img/flechaNegraL.webp" alt="Imagen 1" class="imagen1Slider" />
        <img src="./img/flechaVerdeListo.webp" alt="Imagen 2" class="imagen2Slider" />
      </div>
      <br />
    </a>
  </div>
);

const ConoceMasMD = () => (
  <>
    <div className="slider-wrapper noresponsive">
      <div className="slider-line"></div>
      <Slider {...settings}>
        <Slide
          imgSrc="./img/serv2.png"
          altText="Second slide"
          mainCaption="Paid Media"
          subCaption="Tu marca brillará aún más con estrategias de pago en todo el ecosistema digital."
          linkTo="/paid-media"
        />
        <Slide
          imgSrc="./img/serv3.png"
          altText="Third slide"
          mainCaption="Branding Estratégico"
          subCaption="La identidad corporativa de tu marca. Encontramos lo que te hace único y se lo contamos al mundo."
          linkTo="/branding-estratégico"
        />
        <Slide
          imgSrc="./img/serv4.png"
          altText="Fourth slide"
          mainCaption="Desarrollo Web / e-commerce"
          subCaption="Desarrollamos un sitio web funcional, elegante y vendedor para tu empresa"
          linkTo="/desarrollo-web"
        />
        <Slide
          imgSrc="./img/generacionleads.png"
          altText="Fifth slide"
          mainCaption="Generación de Leads"
          subCaption="Estrategias de redes sociales para alcanzar y convertir nuevos clientes"
          linkTo="/generacion-leads"
        />
        <Slide
          imgSrc="./img/serv6.png"
          altText="Sixth slide"
          mainCaption="Producción fotográfica, audio y video"
          subCaption="Desarrollo, producción y post producción de fotografías, videos y piezas audiovisuales."
          linkTo="/produccion-fotografia-video"
        />
      </Slider>
      <div className="slider-line"></div>
    </div>

    <div className="responsive">
      <Servicios />
    </div>
  </>
);

export default ConoceMasMD;