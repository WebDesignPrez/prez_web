import data from "../data/data";
import { useState } from 'react';
import ButtonList from "./ButtonList";

function BlogPosts() {
    const item = data.find((item) => item.id === 1);

    return (
        <>
            <a href="./#"><img className="logo" src="./img/logopr.png" alt="Logo" /></a>
            <div className="blogTitulo">
                <p>{item.title}</p>
            </div>
            <div className="blogContenedor">
                <div className="blogPrincipal">
                    <div className="blogImg">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <p><strong>Descripción: </strong>{item.description}</p>
                    <p>{item.textBlog}</p>
                </div>
                <div className="blogDerecha">
                    <strong>Categoría: </strong>
                    <p>{item.category}</p>
                    <strong>Fecha de publicación: </strong>
                    <p>{item.date}</p>
                    <strong>Tiempo de lectura: </strong>
                    <p>{item.ReadingTime}</p>
                </div>
            </div>
        </>
    );
}

export default BlogPosts;