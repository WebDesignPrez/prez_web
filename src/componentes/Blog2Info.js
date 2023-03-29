import data from "../data/data";

function Blog2Info() {
    const item = data.find((item) => item.id === 2);

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

export default Blog2Info;