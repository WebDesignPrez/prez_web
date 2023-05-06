import { useEffect, useState } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom"

function MenuLateralSinHome() {
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

    const closeMenu = () => {
        console.log(location.pathname)

        navigate("/");
        handleToggle()
    }

    const topFunction = () => {
        navigate("/");
        if (isActive) {
            handleToggle()
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <div className={isActive ? "mainMenu mainMenuActive" : "mainMenu"}>
                <div className="linkBoxSinHome">
                    <div className="link"><a href="#" onClick={closeMenu}>Inicio</a></div>
                    <div className="link"><a href="#Servicios" onClick={closeMenu}>Nuestros Servicios</a></div>
                    <div className="link"><a href="#Casos-exito" onClick={closeMenu}>Clientes en Órbita</a></div>
                    <div className="link"><a href="#Clientes" onClick={closeMenu}>Clientes que viajan <br></br>con nosotros</a></div>
                    <div className="link"><a href="#Ultimos-casos" onClick={closeMenu}>Últimos casos</a></div>
                    <div className="link"><a href="#Testimonios" onClick={closeMenu}>Testimonios</a></div>
                </div>
                <div class="container">
                    <a href="https://www.facebook.com/agenciaprez" >
                        <img src="img/FaceVerde.webp" alt="FB" />
                    </a>
                    <a href="https://www.instagram.com/prez_agencia/" >
                        <img src="img/InstaVerde.webp" alt="Instagram" />
                    </a>
                    <a>
                        <img src="img/TiktokVerde.webp" alt="Tiktok" />
                    </a>
                    <a>
                        <img src="img/InVerde.webp" alt="In" />
                    </a>
                </div>
            </div>
            <div className={isActive ? "menuLateral menuLateralActive" : "menuLateral"}>

                {/* <div className="logoLateral" onClick={topFunction}></div> */}
                <a className="burger" onClick={handleToggle}> <span></span> <span></span> </a>
                <div className="textoRotar"><a className="linkDecor" onClick={selOpt}>Let's Talk</a></div>
                <div className="logomovil"><a href="./#">
                    <img  src="./img/logopr.png" alt="Logo"></img>
                </a></div>
            </div>
        </>
    )
}
export default MenuLateralSinHome