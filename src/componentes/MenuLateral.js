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
                    <div className="link"><a href="#Servicios" onClick={closeMenu}>Nuestros Servicios</a></div>
                    <div className="link"><a href="#Casos-exito" onClick={closeMenu}>Casos de éxito</a></div>
                    <div className="link"><a href="#Clientes" onClick={closeMenu}>Clientes que viajan <br></br>con nosotros</a></div>
                    <div className="link"><a href="#Ultimos-casos" onClick={closeMenu}>Últimos casos</a></div>
                    <div className="link"><a href="#Testimonios" onClick={closeMenu}>Testimonios</a></div>
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