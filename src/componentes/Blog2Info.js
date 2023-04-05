import data from "../data/data";

function Blog2Info() {
    const item = data.find((item) => item.id === 2);

    const item2 = data.find((item) => item.id === 1);

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
                    <p>{item.textBlog}</p>
                    <p>{item.textBlog2}</p>
                    <p>{item.textBlog3}</p>
                    <p>{item.textBlog4}</p>
                    <p>{item.textBlog5}</p>
                    <p>{item.textBlog6}</p>
                    <p>{item.textBlog7}</p>
                    <p>{item.textBlog8}</p>
                </div>
                <div className="blogDerecha">
                    <br />
                    <a href="./blog1">
                        <div class="card">
                            <div class="card-img" style={{ backgroundImage: `url(${item2.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div class="card-title">
                                <h2>{item2.title}</h2>
                            </div>
                        </div>
                    </a>
                    <br/>
                </div>
            </div>
        </>
    );
}

export default Blog2Info;