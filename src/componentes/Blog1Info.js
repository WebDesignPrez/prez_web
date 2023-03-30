import data from "../data/data";
import Card from 'react-bootstrap/Card';
import '../Card.css'
import ArticleList from "../componentes/ArticleLists";
import ButtonList from "../componentes/ButtonList";
import { useState } from "react";

function BlogPosts() {
    const item = data.find((item) => item.id === 1);

    const item2 = data.find((item) => item.id === 2);
    const item3 = data.find((item) => item.id === 3);

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
                    <p><strong>Categoría:</strong> {item.category}</p>
                    <p><strong>Fecha de publicación:</strong> {item.date}</p>
                </div>
            </div>
            <div className="blogContenedor">
                <div className="blogPrincipal">
                    <p><strong>Descripción: </strong>{item.description}</p>
                    <p>{item.textBlog}</p>
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
                    <a href="./blog3">
                        <div class="card">
                            <div class="card-img" style={{ backgroundImage: `url(${item3.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div class="card-title">
                                <h2>{item3.title}</h2>
                            </div>
                        </div>
                    </a>
                    <br/>
                </div>
            </div>
        </>
    );
}

export default BlogPosts;