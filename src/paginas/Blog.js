/* import LetsTalk from "../componentes/LetsTalk";
import MenuLateral from "../componentes/MenuLateral";
import PiePagina from "../componentes/PiePagina";
import Testimonios from "../componentes/Testimonios";
import ConoceMasDW from "../componentes/ConoceMasDW";
import VideoDE from "../componentes/VideoDE";
import FotoVideoDE from "../componentes/FotoVideoDE";
import VideoBL from "../componentes/VideoBL";

import { useState } from 'react';
import './App.css';
import { ArticleList, ButtonList } from '../componentes/';
import data from '../data/data';

function App() {
	const allCategories = [
		'All',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<div className='title'>
				<h1>
					Filter <span>Blog</span> Basics
				</h1>
				<img
					src='https://blogfilterbasics.netlify.app/static/media/img-portada.8261f3883a73550017d1.png'
					alt='imagen-header'
				/>
			</div>

			<ButtonList categories={categories} filterCategory={filterCategory}/>

			<ArticleList articles={articles}/>
		</>
	);
}

export default App; */