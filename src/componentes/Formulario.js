
import $ from "jquery";
import '../form.css'
//import '../responsive.css'
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Formulario() {
    let redireccion = "lets-talk"
    let url = "https://formsubmit.co/bd7a91f30f9171c83a3770cf08cf746c"
    let [nombre_y_apellido, setName] = useState('');
    let [ciudad, setCity] = useState('');
    let [email, setEmail] = useState('');
    let [celular, setTel] = useState('');
    let [cedula, setCed] = useState('');
    let [requerimiento, setReq] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeTel = (e) => {
        setTel(e.target.value);
    }

    const handleChangeCed = (e) => {
        setCed(e.target.value);
    }

    const handleChangeReq = (e) => {
        setReq(e.target.value);
    }


    const handleFocus = (e) => {
        let aux = e.target.closest('.input-group');
        if (validateName(e.target.value)) {
            aux.classList.add("errorClass")
            NotificationManager.error('Completar los datos requeridos.', '');
        } else {
            aux.classList.remove("errorClass")
        }
    }

    const validateName = (e) => {
        if (e == "" || e.length < 3)
            return true
        else
            return false
    }

    const handleFocusEmail = (e) => {
        let aux = e.target.closest('.input-group');
        if (validateEmail(e.target.value)) {
            aux.classList.add("errorClass")
            NotificationManager.error('Email incorrecto.', '');
        } else {
            aux.classList.remove("errorClass")
        }
    }

    const validateEmail = (e) => {
        if (e == "" || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)))
            return true
        else
            return false
    }

    const handleFocusTel = (e) => {
        let aux = e.target.closest('.input-group');
        if (validateTel(e.target.value)) {
            aux.classList.add("errorClass")
            NotificationManager.error('Numero telefonico incorrecto.', '');
        } else {
            aux.classList.remove("errorClass")
        }
    }

    const validateTel = (e) => {
        if (e === "" || !(/^\d+$/.test(e)) || e.length < 6 || e.length > 10)
            return true
        else
            return false
    }

    const handleFocusCed = (e) => {
        let aux = e.target.closest('.input-group');
        if (validateCed(e.target.value)) {
            aux.classList.add("errorClass")
            NotificationManager.error('Cedula incorrecta.', '');
        } else {
            aux.classList.remove("errorClass")
        }
    }

    const validateCed = (e) => {
        if (e === "" || !(/^\d+$/.test(e)) || (e.length !== 10 && e.length !== 13))
            return true
        else
            return false
    }

    function handleSumbit(e) {
        e.preventDefault();
        if (!validateName(e.target[0].value) && !validateName(e.target[1].value) && !validateEmail(e.target[2].value) && !validateTel(e.target[3].value)) {
            const form = $(e.target);
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: form.serialize(),
                success(data) {
                    NotificationManager.success('Datos enviados.', '',);
                    setName('')
                    setCity('')
                    setEmail('')
                    setTel('')
                    setCed('')
                    setReq('')

                },
                error(data) {
                    NotificationManager.success('Datos enviados.', '');
                    setName('')
                    setCity('')
                    setEmail('')
                    setTel('')
                    setCed('')
                    setReq('')
                }
            })
        } else {
            NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
        }
    }

    return (
        <>

            <div class="containerFor">
            <div class="column-leftFor">
            <div className="tituloMarketing" id="Inicio">
                <div className="iconotituloizquierda">

                </div>
                <div>
                    <p>¿ Listo para hablar</p>
                    <p><span>con nosotros ?</span></p>
                </div>

                <img src="./img/flecha-negra-abajo.webp" alt="" />
                <div className="formContainer">
                <div className="form-box">
                    <form action={url} method="POST" onSubmit={(ev) => handleSumbit(ev)}>
                        <div class="form-field">
                            <input type="text" id="nombre_y_apellido" placeholder=" " name="nombre_y_apellido" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChange(e) }} value={nombre_y_apellido} />
                            <label for="nombre_y_apellido">Nombre y Apellido</label>
                        </div>
                        <div class="form-field">
                            <input type="text" id="ciudad" placeholder=" " name="ciudad" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChangeCity(e) }} value={ciudad} />
                            <label for="ciudad">Ciudad</label>
                        </div>
                        <div class="form-field">
                            <input type="text" id="email" placeholder=" " name="email" onBlur={(e) => { handleFocusEmail(e) }} onChange={(e) => { handleChangeEmail(e) }} value={email} />
                            <label for="email">Correo</label>
                        </div>
                        <div class="form-field">
                            <input type="text" id="celular" placeholder=" " name="celular" onBlur={(e) => { handleFocusTel(e) }} onChange={(e) => { handleChangeTel(e) }} value={celular} />
                            <label for="celular">Celular</label>
                        </div>
                        <div class="form-field">
                            <input type="text" id="cedula" placeholder=" " name="cedula" onBlur={(e) => { handleFocusCed(e) }} onChange={(e) => { handleChangeCed(e) }} value={cedula} />
                            <label for="cedula">Cédula</label>
                        </div>
                        <div class="form-field">
                            <textarea name='requerimeinto' id="requerimeinto" placeholder=" " onChange={(e) => { handleChangeReq(e) }} value={requerimiento} ></textarea>
                            <label class="ltextarea" for="requerimeinto">Requerimiento</label>
                        </div>
                        <button className="nextBtn" type="submit"> Contactar </button>
                        <input type="hidden" name="_captcha" value="false" />
                        <NotificationContainer />
                    </form>
                </div>

            </div>

            </div>
            </div>
            <div class="column-rightFor">
                
            </div>
            </div>

           
        </>
    )
}
/*NUEVA*/
export default Formulario