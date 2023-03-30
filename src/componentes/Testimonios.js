import { useEffect, useState } from "react";

function Testimonios() {
    let testimoniosData = [{
        comentario: "Yo siempre he tenido en cuenta la buena atención, puntualidad y responsabilidad, pero lo que ustedes me ofrecieron fue más que eso, siempre han aportado soluciones originales a los retos planteados, de una manera organizada y sobre todo muy creativos, por eso recomiendo a Prez Agencia de Marketing por su calidad y buen servicio.",
        nombre: "Andres Morales",
        cargo: "Gerente Inmobiliaria M&M",
        img: "./img/AndresMorales.png"
    }, {
        comentario: "Haber seleccionado a Prez Agencia de Marketing para que nos brinde apoyo en nuestra gestión comercial en el área de Educación continua, es porque al ser un grupo de jóvenes con ideas creativas, han hecho que los objetivos los vayamos cumpliendo, Ctt de los Andes se siente complacido de contar con Prez Agencia de Marketing por tener un enfoque estratégico y sólido que nos permiten medir el éxito de nuestra institución con resultados.",
        nombre: "Ing. Roberto Cuesta",
        cargo: "Director General CTT de los Andes",
        img: "./img/cctCliente.png"
    }, {
        comentario: "Prez para el Cebi y Pollo Listo, ha sido la única empresa de marketing, que expresa de la mejor manera todos nuestros servicios de una forma muy creativa y diferente a nuestra competencia. Nos gusta su responsabilidad creatividad y sobretodo su compromiso.",
        nombre: "Gino Moya",
        cargo: "Gerente administrativo CEBI",
        img: "./img/gino.png"
    }, {
        comentario: "Desde el primer momento PREZ agencia de marketing nos hizo sentir como en casa en un ambiente cordial amigable y sobretodo muy técnico. Su gerente Martín Flores, nos explicaba de una forma muy didáctica todos los pasos a seguir en la planificación para el logro de los objetivos y resultados deseados, yo quiero agradecer de manera especial a esta agencia por que no sólo fue el servicio de marketing sino una exhaustiva planeación estratégica con una visión 360.",
        nombre: "Dr. JuanPa Vargas",
        cargo: "Mentor Psicológico",
        img: "./img/juampa.png"
    }, {
        comentario: "who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS",
        nombre: "Nombre 5",
        cargo: "Director 6",
        img: "./img/testimonialDefecto.png"
    }, {
        comentario: "amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS",
        nombre: "Nombre 6",
        cargo: "Director 7",
        img: "./img/testimonialDefecto.png"
    }, {
        comentario: "hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS",
        nombre: "Nombre 7",
        cargo: "Director 8",
        img: "./img/testimonialDefecto.png"
    }];

    let [contador, setContador] = useState(1);
    let total = testimoniosData.length
    let box
    let width
    let space

    useEffect(() => {
        box = document.getElementById('style-1');
        width = box.offsetWidth;
        space = parseInt(width / (total / 1.5))
    })

    const handleContadorMax = (e) => {
        let auxContador = contador
        if (contador < total) {
            auxContador += 1
            setContador(auxContador)
            if (auxContador == total) {
                box.scrollTo({
                    top: 0,
                    left: 5000,
                    behavior: 'smooth'
                })
            } else {
                box.scrollTo({
                    top: 0,
                    left: space * auxContador,
                    behavior: 'smooth'
                })
            }
        }
    }

    const handleContadorMin = (e) => {
        let auxContador = contador
        if (contador > 1) {
            auxContador -= 1
            setContador(auxContador)
            if (auxContador == 1)
                box.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
            else
                box.scrollTo({
                    top: 0,
                    left: space * auxContador,
                    behavior: 'smooth'
                })
        }
    }

    return (
        <>
            <div className="testimonios">
                <div className="titulo">Testimonios</div>
                <div className="controls">
                    <span className="anterior" onClick={() => { handleContadorMin() }}></span>
                    <span className="contador">{contador}/{total}</span>
                    <span className="siguiente" onClick={() => { handleContadorMax() }}></span>
                </div>
            </div>

            <div className="testimoniosContainer scrollbar" id="style-1">

                <div className="testimoniosBox">
                    {testimoniosData.map((data, index) => (
                        <div key={index} className='box'>
                            <img src="./img/quotes.png" alt="quotes" />
                            <p className="comentarioTestimonio">{data.comentario}</p>
                            <div className="fotoTestimonio">
                                <img src={data.img}  />
                                <br/>
                                <p className="sinespacio titulotestimonio"><strong>{data.nombre}</strong><br/><span className="subtitulotestimonio">{data.cargo}</span></p>
                            </div>
                        </div>
                    ))
                    }
                </div>

            </div>
        </>
    )
}
export default Testimonios