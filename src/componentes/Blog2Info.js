import data from "../data/data";

function Blog2Info() {
    const item = data.find((item) => item.id === 2);

    return (
        <>
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
                    <div class="card">
                        <div class="card-header">
                        Categoría
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{item.category}</h5>
                        </div>
                    </div>
                    <br/>
                    <div class="card">
                        <div class="card-header">
                        Fecha de publicación
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{item.date}</h5>
                        </div>
                    </div>
                    <br/>
                    <div class="card">
                        <div class="card-header">
                        Tiempo de lectura
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{item.ReadingTime}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog2Info;