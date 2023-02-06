import { useEffect, useState } from "react";

function Testimonios(){
    let testimoniosData = [{
        comentario : "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS",
        nombre : "Nombre 1",
        cargo: "Director 2"
    }, {
        comentario : "to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS",
        nombre : "Nombre 2",
        cargo: "Director 3"
    }, {
        comentario : "This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS",
        nombre : "Nombre 3",
        cargo: "Director 4"
    }, {
        comentario : "He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS",
        nombre : "Nombre 4",
        cargo: "Director 5"
    }, {
        comentario : "who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS",
        nombre : "Nombre 5",
        cargo: "Director 6"
    }, {
        comentario : "amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS",
        nombre : "Nombre 6",
        cargo: "Director 7"
    }, {
        comentario : "hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS",
        nombre : "Nombre 7",
        cargo: "Director 8"
    }];

    let [contador, setContador] = useState(1);
    let total = testimoniosData.length
    let box
    let width
    let space

    useEffect(() => {
        box = document.getElementById('style-1');
        width = box.offsetWidth;
        space = parseInt(width/(total/1.5))
    })

    const handleContadorMax = (e) =>{
        let auxContador = contador
        if(contador<total){
            auxContador += 1
            setContador(auxContador)
            if(auxContador==total){
                box.scrollTo({
                    top: 0,
                    left: 5000,
                    behavior: 'smooth'
                })
            }else{
                box.scrollTo({
                    top: 0,
                    left: space*auxContador,
                    behavior: 'smooth'
                })                
            }
        }    
    }

    const handleContadorMin = (e) =>{
        let auxContador = contador
        if(contador>1){
            auxContador -= 1
            setContador(auxContador)
            if(auxContador==1)
                box.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  })
            else
                box.scrollTo({
                    top: 0,
                    left: space*auxContador,
                    behavior: 'smooth'
                  })
        }
    }
    
    return(
        <>  
            <div className="testimonios">
                <div className="titulo">Testimonios</div>
                <div className="controls">
                    <span className="anterior" onClick={()=>{handleContadorMin()}}></span>
                    <span className="contador">{contador}/{total}</span>
                    <span className="siguiente" onClick={()=>{handleContadorMax()}}></span>
                </div>
            </div>
            
            <div className="testimoniosContainer scrollbar" id="style-1">
                
                <div className="testimoniosBox">
                    {testimoniosData.map((data, index) => ( 
                        <div key={index} className='box'>
                            <img src="./img/quotes.png" alt="quotes"/>
                            <p>{data.comentario}</p>
                            <p><strong>{data.nombre}</strong></p>
                            <p>{data.cargo}</p>
                        </div>
                    ))
                    }
                </div>
                
            </div>
        </>
    )
}
export default Testimonios