import { useEffect, useState } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom"

function MenuLateral(){
    let location = useLocation();

    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);  
    }

    const navigate = useNavigate();

    const selOpt = () => {
        navigate("/lets-talk")
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const closeMenu = ()=>{        
        console.log(location.pathname)
      
        navigate("/");
        handleToggle()
    }

    const topFunction = ()=> {
        navigate("/");
        if(isActive){
            handleToggle()
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
      }

    return(
        <>
            <div className={isActive ? "mainMenu mainMenuActive" : "mainMenu"}>
                <div className="linkBox">
                    <div className="link"><a href="#" onClick={closeMenu}>Inicio</a></div>
                    <div className="link"><a href="#Servicios" onClick={closeMenu}>Nuestros Servicios</a></div>
                    <div className="link"><a href="#Casos-exito" onClick={closeMenu}>Casos de éxito</a></div>
                    <div className="link"><a href="#Clientes" onClick={closeMenu}>Clientes que viajan <br></br>con nosotros</a></div>
                    <div className="link"><a href="#Ultimos-casos" onClick={closeMenu}>Últimos casos</a></div>
                    <div className="link"><a href="#Testimonios" onClick={closeMenu}>Testimonios</a></div>
                </div>
                <div class="container">
                <a href="https://www.facebook.com/agenciaprez" >
                    <img src="img/fb.png" alt="Imagen FB"/>
                </a>    
                <a href="https://www.instagram.com/prez_agencia/" >
                    <img src="img/insta.png" alt="Imagen Instagram"/>
                </a>
                <img src="img/in.png" alt="Imagen In"/>
            </div>
            </div>
            <div className={isActive ? "menuLateral menuLateralActive" : "menuLateral"}>
                
                <div className="logoLateral" onClick={topFunction}></div>
                <a className="burger" onClick={handleToggle}> <span></span> <span></span> </a>
                <div className="textoRotar"><a className="linkDecor" onClick={selOpt}>Let's talk</a></div>
            </div>
        </>
    )
}
export default MenuLateral