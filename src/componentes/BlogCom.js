import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasDW from "../componentes/ConoceMasDW";
import VideoDE from "../componentes/VideoDE";
import FotoVideoDE from "../componentes/FotoVideoDE";
import VideoBL from "../componentes/VideoBL";

import { useState } from 'react';
import ArticleList from "../componentes/ArticleLists";
import ButtonList from "../componentes/ButtonList";
import data from '../data/data';
import '../blog.css';

function BlogCom() {
    const allCategories = [
        'Todo',
        ...new Set(data.map(article => article.category)),
    ];

    const [categories, setCategories] = useState(allCategories);
    const [articles, setArticles] = useState(data);

    const filterCategory = (category) => {
        if (category === 'Todo') {
            setArticles(data)
            return
        }

        const filteredData = data.filter(article => article.category === category);
        setArticles(filteredData)
    }

    return (
        <>
            <img className="logo" src="./img/logopr.png" alt="Logo" />
            <div className="inicioBlog">
                <div className="tituloMarketing" id="Inicio">
                    <div className="iconotituloizquierda">
                    </div>
                    <div>
                        <p><span>Blog</span></p>
                    </div>
                </div>

                <div className="abajo">
                    <p>Te invitamos a despegar hacia el futuro de la información y descubrir un<span> universo lleno de noticias novedosas </span><span className='fondoV'>con nuestra plataforma de blogs.</span>.</p>
                </div>
            </div>
            <ButtonList categories={categories} filterCategory={filterCategory} />

            <ArticleList articles={articles} />
        </>
    );
}

export default BlogCom;