import data from "../data/data";
import Card from 'react-bootstrap/Card';
import '../Card.css'
import ArticleList from "../componentes/ArticleLists";
import ButtonList from "../componentes/ButtonList";
import { useState } from "react";

function BlogPosts() {
    const item = data.find((item) => item.id === 1);

    const item2 = data.find((item) => item.id === 2);

    const handleMouseMove = (event) => {
        const bg = document.querySelector('.fullscreen-bg');
        const xPos = event.clientX / window.innerWidth;
        const yPos = event.clientY / window.innerHeight;
        bg.style.backgroundPosition = `${xPos * 100}% ${yPos * 100}%`;
    };

    return (
        <>
            <div class="fullscreen-bg" style={{ backgroundImage: `url(${item.image})`, height: '50vh', backgroundSize: 'cover', backgroundPosition: 'center' }} onMouseMove={handleMouseMove}>
                <div class="overlay">
                </div>
                <div className="contenedorTextoImagen">
                    <div className="blogTitulo">
                        <p>{item.title}</p>
                    </div>
                    <div className="blogCategoria">
                        <p><strong>Categoría:</strong> {item.category}</p>
                    </div>
                    <div className="blogFecha">
                        <p><strong>Fecha de publicación:</strong> {item.date}</p>
                    </div>
                </div>
            </div>
            <div className="blogContenedor">
                <div className="blogPrincipal">
                    <p><strong>Descripción: </strong>{item.description}</p>
                    En la era digital en la que vivimos, el marketing es una de las herramientas más importantes para cualquier empresa o negocio que quiera tener éxito. En este sentido, ChatGPT se presenta como una herramienta de gran utilidad en el mundo del marketing, gracias a su capacidad de procesamiento de lenguaje natural y su capacidad para interactuar con los usuarios. <br/>
                    ChatGPT es un modelo de lenguaje natural de última generación desarrollado por OpenAI, que utiliza inteligencia artificial para generar respuestas precisas y relevantes a partir de una pregunta o un texto dado. Este modelo de lenguaje natural ha sido entrenado con una gran cantidad de datos, lo que le permite tener un conocimiento profundo sobre una amplia variedad de temas, desde cultura general hasta temas técnicos y científicos.<br/>
                    La capacidad de ChatGPT para entender y responder preguntas con una gran precisión y rapidez, lo convierte en una herramienta muy útil en el mundo del marketing. Por ejemplo, ChatGPT puede ayudar a las empresas a responder preguntas frecuentes de los clientes, lo que puede mejorar la experiencia del usuario y aumentar la satisfacción del cliente.<br/>
                    Además, ChatGPT también puede ser utilizado para automatizar las interacciones con los clientes, lo que puede ahorrar tiempo y recursos a las empresas. Por ejemplo, un chatbot alimentado por ChatGPT puede responder preguntas de los clientes en tiempo real, ofreciendo soluciones rápidas y eficaces a sus problemas o necesidades.<br/>
                    Otro beneficio importante de ChatGPT es su capacidad para personalizar la experiencia del usuario. Al entender las preferencias y necesidades de los clientes, ChatGPT puede ofrecer respuestas y soluciones específicas y adaptadas a cada cliente. Esto puede aumentar la satisfacción del cliente y mejorar la percepción de la marca. <br/>
                    En resumen, la importancia de ChatGPT en el marketing radica en su capacidad para procesar el lenguaje natural y entender las necesidades y preferencias de los clientes. Con su capacidad para responder preguntas de manera rápida y eficiente, automatizar las interacciones con los clientes y personalizar la experiencia del usuario, ChatGPT se presenta como una herramienta valiosa para cualquier empresa que quiera mejorar su presencia en línea y su relación con los clientes.
                </div>
                <div className="blogDerecha">
                    <br />
                    <a href="./blog2">
                        <div class="card">
                            <div class="card-img" style={{ backgroundImage: `url(${item2.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div class="card-title">
                                <h2>{item2.title}</h2>
                            </div>
                        </div>
                    </a>
                    <br />
                </div>
            </div>
        </>
    );
}

export default BlogPosts;