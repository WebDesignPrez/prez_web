
import $ from "jquery";
import '../form.css'
//import '../responsive.css'
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Formulario() {
    let url = "https://vehicentro.com/prez/ws-form.php"
    let redireccion = "gracias-por-contactarse"

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
                NotificationManager.success('Datos enviados.', '');
            }, 
            error(data){
                NotificationManager.success('Datos enviados.', '');
                setName('')
                setCity('')
                setEmail('')
                setTel('')
                setCed('')
                window.location.href = redireccion;
            }
            })
        } else {
            NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
        }
    }

    return (
        <>
            <div id="contact" className="contactBanner">
                <div className="title">Lets´s Talk</div>
                <div className="desc">Sé parte de nuestro mundo.</div>
            </div>
            <div className="formContainer">
                <div className="form-box">
                <form action={url} method="post" onSubmit={(ev) => handleSumbit(ev)}>
                    <div className="field1">

                    <label className="input_title">*Nombre y Apellido</label>
                    <div className="input-group">
                        <span className="userIcon"><img src="./img/user-solid.png" /></span>
                        <input placeholder="" name="nombre_y_apellido" type="text" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChange(e) }} value={nombre_y_apellido} />
                    </div>

                    <label className="input_title">*Ciudad</label>
                    <div className="input-group">
                        <span className="userIcon"><img src="./img/address-card-solid.png" /></span>
                        <input placeholder="" name="ciudad" type="text" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChangeCity(e) }} value={ciudad} />
                    </div>

                    <label className="input_title">*Email</label>
                    <div className="input-group">
                        <span className="userIcon"><img src="./img/envelope-solid.png" /></span>
                        <input placeholder="" name="email" type="text" onBlur={(e) => { handleFocusEmail(e) }} onChange={(e) => { handleChangeEmail(e) }} value={email} />
                    </div>

                    <label className="input_title">*Teléfono</label>
                    <div className="input-group">
                        <span className="userIcon"><img src="./img/phone-solid.png" /></span>
                        <input placeholder="" name="celular" type="text" onBlur={(e) => { handleFocusTel(e) }} onChange={(e) => { handleChangeTel(e) }} value={celular} />
                    </div>

                    <label className="input_title">*Cédula</label>
                    <div className="input-group">
                        <span className="userIcon"><img src="./img/portrait-solid.png" /></span>
                        <input placeholder="" name="cedula" type="text" onBlur={(e) => { handleFocusCed(e) }} onChange={(e) => { handleChangeCed(e) }} value={cedula} />
                    </div>

                    <label className="input_title">Requerimiento</label>
                    <div className="input-group">
                        <textarea name='requerimeinto' onChange={(e) => { handleChangeReq(e) }}  value={requerimiento} ></textarea>
                    </div>
            
                    </div>
                    <button className="nextBtn" type="submit"> Contactar </button>
                    <NotificationContainer />
                </form>
                </div>          
            </div>
        </>
    )
}

export default Formulario