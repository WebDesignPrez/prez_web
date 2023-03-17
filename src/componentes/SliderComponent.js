import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
};

const Slide = ({ imgSrc, altText, mainCaption, subCaption, linkTo }) => (
  <div className="slide-container">
    <a href={linkTo}>
      <img className="slider-image" src={imgSrc} alt={altText} />
      <div className="slide-caption"></div>
      <p className="main-caption">{mainCaption}</p>
      <p className="sub-caption">{subCaption}</p>
      <br/>
    </a>  
  </div>
);

const SliderComponent = () => (
  <Slider {...settings}>
    <Slide
      imgSrc="./img/serv1.png"
      altText="First slide"
      mainCaption="Marketing Digital"
      subCaption="La aventura digital de tu negocio comienza aquí. En nuestro mundo enfocado en resultados, podrás viajar en modo automático."
      linkTo="/marketing-digital"
    />
    <Slide
      imgSrc="./img/serv2.png"
      altText="Second slide"
      mainCaption="Paid Media       "
      subCaption="Estrategias de pauta en plataformas como Facebook ADS y Google ADS"
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
      imgSrc="./img/serv5.png"
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
);


export default SliderComponent;
