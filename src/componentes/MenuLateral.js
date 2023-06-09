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
                    <div className="link"><a href="./marketing-digital" onClick={closeMenu}>Marketing Digital</a></div>
                    <div className="link"><a href="./paid-media" onClick={closeMenu}>Paid Media</a></div>
                    <div className="link"><a href="./branding-estrategico" onClick={closeMenu}>Branding Estratégico</a></div>
                    <div className="link"><a href="./desarrollo-web" onClick={closeMenu}>Desarrollamos Web / e-commerce</a></div>
                    <div className="link"><a href="./generacion-leads" onClick={closeMenu}>Generación de Leads</a></div>
                </div>
                <div class="container">
                    <a href="https://www.facebook.com/agenciaprez" >
                        <img src="img/FaceVerde.webp" alt="Logo Facebook" />
                    </a>
                    <a href="https://www.instagram.com/prez_agencia/" >
                        <img src="img/InstaVerde.webp" alt="Logo Instagram" />
                    </a>
                    <a>
                        <img src="img/TiktokVerde.webp" alt="Logo Tiktok" />
                    </a>
                    <a>
                        <img src="img/InVerde.webp" alt="Logo LinkedIn" />
                    </a>
                </div>
            </div>
            <div className={isActive ? "menuLateral menuLateralActive" : "menuLateral"}>

                {/* <div className="logoLateral" onClick={topFunction}></div> */}
                <a className="burger" onClick={handleToggle}> <span></span> <span></span> </a>
                <div className="textoRotar"><a className="linkDecor" onClick={selOpt}>Let's Talk</a></div>
                <div className="logomovil"><a href="./#">
                    <majo  src="./img/logopr.png" alt="Logo Agencia Prez"></majo>
                </a></div>
            </div>
        </>
    )
}
export default MenuLateralSinHome