import { useEffect, useState } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom"

function MenuLateralSinHome() {
    let location = useLocation();

    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
        // Aplicar una clase al cuerpo para evitar el scroll cuando el menú está activo
        if (!isActive) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    };

    const navigate = useNavigate();

    const selOpt = () => {
        navigate("/lets-talk");
        // También puedes manejar el scroll aquí si es necesario
        window.scrollTo(0, 0);
    };

    const closeMenu = () => {
        console.log(location.pathname);

        navigate("/");
        handleToggle();
    };

    useEffect(() => {
        // Limpia la clase al cuerpo cuando el componente se desmonta
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    return (
        <>
            <div className={isActive ? "mainMenu mainMenuActive" : "mainMenu"}>
                <div className="linkBoxSinHome">
                    <div className="link"><a href="./marketing-digital" onClick={closeMenu}>Marketing Digital</a></div>
                    <div className="link"><a href="./paid-media" onClick={closeMenu}>Paid Media</a></div>
                    <div className="link"><a href="./branding-estrategico" onClick={closeMenu}>Branding Estratégico</a></div>
                    <div className="link"><a href="./desarrollo-web" onClick={closeMenu}>Desarrollamos Web / e-commerce</a></div>
                    <div className="link"><a href="./generacion-leads" onClick={closeMenu}>Generación de Leads</a></div>
                </div>
                <div class="container">
                    <a href="https://www.facebook.com/agenciaprez" >
                        <img src="img/FaceVerde.webp" alt="Logo Facebook, Agencia de marketing" />
                    </a>
                    <a href="https://www.instagram.com/prez_agencia/" >
                        <img src="img/InstaVerde.webp" alt="Logo Instagram, Agencia de marketing" />
                    </a>
                    <a>
                        <img src="img/TiktokVerde.webp" alt="Logo Tiktok, Agencia de marketing" />
                    </a>
                    <a>
                        <img src="img/InVerde.webp" alt="Logo linkend, Agencia de marketing" />
                    </a>
                </div>
            </div>
            <div className={isActive ? "menuLateral menuLateralActive" : "menuLateral"}>

                {/* <div className="logoLateral" onClick={topFunction}></div> */}
                <a className="burger" onClick={handleToggle}> <span></span> <span></span> </a>
                <div className="textoRotar"><a className="linkDecor" onClick={selOpt}>Let's Talk</a></div>
                <div className="logomovil"><a href="./#">
                    <img  src="./img/logoprcuadrado.png" alt="Logo"></img>
                </a></div>
            </div>
        </>
    )
}
export default MenuLateralSinHome