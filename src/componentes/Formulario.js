
import $ from "jquery";
import '../form.css'
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
    let [servicio, setServicio] = useState('');

    


    const handleChangeService = (e) => {
        setServicio(e.target.value);
    }

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
        if (!validateName(e.target[0].value)) {
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
                    setServicio('');


                },
                error(data) {
                    NotificationManager.success('Datos enviados.', '');
                    setName('')
                    setCity('')
                    setEmail('')
                    setTel('')
                    setCed('')
                    setReq('')
                    setServicio('');
                }
            })
        } else {
            NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
        }
    }

    return (
        <div>

            <div class="containerFor">
                <div class="column-leftFor">
                    <div className="tituloFormulario" >
                        <div className="iconotituloizquierda">
                        </div>
                        <div>
                            <p>¿Listo para hablar</p>
                            <p><span>con nosotros?</span></p>
                        </div>
                    </div>
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
                                <div class="form-field">
                                    <select id="servicio" name="servicio" for="servicio" onChange={(e) => { handleChangeService(e) }} value={servicio}>
                                        <option value="">¿En qué servicio estas interesado?</option>
                                        <option value="Aumentar las ventas de mi e-commerce">Aumentar las ventas de mi e-commerce</option>
                                        <option value="Conseguir clientes potenciales para mi empresa (leads)">Conseguir clientes potenciales para mi empresa (leads)</option>
                                        <option value="Administrar mis redes sociales y aumentar mi comunidad">Administrar mis redes sociales y aumentar mi comunidad</option>
                                        <option value="Posicionar mi sitio web en Google">Posicionar mi sitio web en Google</option>
                                        <option value="Estrategia de marketing digital 360">Estrategia de marketing digital 360</option>
                                        <option value="Inbound Marketing">Inbound Marketing</option>
                                        <option value="Diseño de página web">Diseño de página web</option>
                                        <option value="Desarrollo web">Desarrollo web</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                                <button className="nextBtn" type="submit">Comenzar el viaje</button>
                                <input type="hidden" name="_captcha" value="false" />
                                <NotificationContainer />
                            </form>
                        </div>

                    </div>


                </div>
                <div class="column-rightFor">
                    <video
                        src="./img/adelante.mp4"
                        autoPlay
                        loop
                        muted
                    >
                        Tu navegador no soporta la etiqueta de video HTML5.
                    </video>
                </div>
            </div>

            
        </div>
    )
}
/*NUEVA*/
export default Formulario