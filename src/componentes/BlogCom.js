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
import '../App.css';

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
            <img className="logo" src="./img/logopr.png" alt="Logo Agencia Marketing Ambato Prez" />
            <div className="inicioBlog">
                <div className="tituloMarketing blog" id="Inicio">
                    <div className="iconotituloizquierda">
                    </div>
                    <div>
                        <p><span>Blog</span></p>
                    </div>
                </div>
                <div className="abajo blog">
                    <p>Descubre noticias novedosas en nuestra plataforma de<span> blogs y despega hacia el </span><span className='fondoV'>futuro de la información</span>.</p>
                </div>
                <div className="contenedorLinea">
                    <div class="line-container arrowBox">
                        <div class="line"></div>
                    </div>
                </div>
            </div>
            <ButtonList categories={categories} filterCategory={filterCategory} />

            <ArticleList articles={articles} />
            <br/>
        </>
    );
}

export default BlogCom;