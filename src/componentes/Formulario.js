
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from '../hooks/useForm';
import emailjs from '@emailjs/browser';
import '../form.css'

const initialForm = {
  nombre_y_apellido: '',
  ciudad: '',
  email: '',
  celular: '',
  cedula: '',
  requerimiento: '',
  servicio: '',
  empresa: ''
}

function Formulario() {

  const navigate = useNavigate()

  const [isEnabledSubmitButton, setIsEnabledSubmitButton] = useState(true)

  const {
    formState,
    onInputChange,
    onResetForm,
    nombre_y_apellido,
    ciudad,
    email,
    celular,
    cedula,
    requerimiento,
    servicio,
    empresa


  } = useForm(initialForm)

  const handleFocus = (e) => {
    let aux = e.target.closest('.input-group');
    if (validateName(e.target.value)) {
      aux.classList.add("errorClass")
      toast.warn('Complete los datos requeridos', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      toast.warn('Email icorrecto', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      toast.warn('Número de teléfono incorrecto', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      toast.warn('Cédula incorrecta', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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



  //* David Methods *//

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateNameAndLastname(nombre_y_apellido) ||
      !validateCiudad(ciudad) ||
      !validateMail(email) ||
      !validateCelular(celular) ||
      !validateCedula(cedula) ||
      !validateRequerimiento(requerimiento) ||
      !validateServicio(servicio) ||
      !validateEmpresa(empresa)
    ) { return }

    setIsEnabledSubmitButton(false)
    // console.log('Form send', formState);

    emailjs.send("service_mail_agenciaprez", "template_agenciaprez", { ...formState }, 'DrcQUlJntI-f4aCkp')
      .then((result) => {
        setIsEnabledSubmitButton(false)
        onResetForm()
        toast.success('Su mensaje ha sido enviado con éxito, pronto nos pondremos en contacto con usted', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        })

        navigate('/agradecimiento')

      }, (error) => {
        console.log(error.text);
      });

  }

  const validateNameAndLastname = (name) => {
    if (name === "" || name.length < 3) {
      toast.warn('Por favor Verifique su nombre y apellido', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    } else {
      return true
    }
  }

  const validateCiudad = (ciudad) => {
    if (ciudad === "" || ciudad.length < 3) {
      toast.warn('Por favor Verifique su ciudad', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    } else {
      return true
    }
  }

  const validateCelular = (celular) => {
    if (celular === "" || celular.length !== 10) {
      toast.warn('Por favor Verifique su celular', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    } else {
      return true
    }
  }

  const validateCedula = (cedula) => {
    if (cedula === "" || cedula.length !== 10) {
      toast.warn('Por favor Verifique su cédula', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    } else {
      return true
    }
  }

  const validateMail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      toast.warn('Por favor Verifique su dirección de correo electrónico', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    } else {
      return true;
    }
  }

  const validateRequerimiento = (requerimiento) => {
    if (requerimiento === "" || requerimiento.length < 10) {
      toast.warn('Por favor describa su requerimiento', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    } else {
      return true
    }
  }

  const validateServicio = (servicio) => {
    if (servicio === "") {
      toast.warn('Por favor seleccione un servicio', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    } else {
      return true
    }
  }
  const validateEmpresa = (servicio) => {
    if (empresa === "") {
      toast.warn('Por favor escriba el nombre de su empresa o negocio', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false
    } else {
      return true
    }
  }




  //* End David Methods *//


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
              <form method="POST" onSubmit={handleSubmit}>
                <div class="form-field">
                  <input type="text" id="nombre_y_apellido" placeholder=" " name="nombre_y_apellido" onBlur={(e) => { handleFocus(e) }} onChange={onInputChange} value={nombre_y_apellido} />
                  <label for="nombre_y_apellido">Nombre y Apellido</label>
                </div>
                <div class="form-field">
                  <input type="text" id="ciudad" placeholder=" " name="ciudad" onBlur={(e) => { handleFocus(e) }} onChange={onInputChange} value={ciudad} />
                  <label for="ciudad">Ciudad</label>
                </div>
                <div class="form-field">
                  <input type="email" id="email" placeholder=" " name="email" onBlur={(e) => { handleFocusEmail(e) }} onChange={onInputChange} value={email} />
                  <label for="email">Correo</label>
                </div>
                <div class="form-field">
                  <input type="text" id="celular" placeholder=" " name="celular" onBlur={(e) => { handleFocusTel(e) }} onChange={onInputChange} value={celular} />
                  <label for="celular">Celular</label>
                </div>

                <div class="form-field">
                  <input type="text" id="cedula" placeholder=" " name="cedula" onBlur={(e) => { handleFocusCed(e) }} onChange={onInputChange} value={cedula} />
                  <label for="cedula">Cédula</label>
                </div>

                <div class="form-field">
                  <input type="text" id="" placeholder=" " name="empresa" onBlur={(e) => { handleFocusCed(e) }} onChange={onInputChange} value={empresa} />
                  <label for="cedula">Empresa / Negocio</label>
                </div>


                <div class="form-field">
                  <textarea name='requerimiento' id="requerimiento" placeholder=" " onChange={onInputChange} value={requerimiento} ></textarea>
                  <label class="ltextarea" for="requerimiento">Requerimiento</label>
                </div>
                <div class="form-field">
                  <select id="servicio" name="servicio" for="servicio" onChange={onInputChange} value={servicio}>
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

                <button disabled={!isEnabledSubmitButton} className="nextBtn" type="submit">
                  {
                    isEnabledSubmitButton
                      ?
                      <p >Comenzar el viaje</p>
                      :
                      <div class="loader"></div>
                  }
                </button>

                <input type="hidden" name="_captcha" value="false" />
              </form>
            </div>

          </div>


        </div>
        <div class="column-rightFor">
          <video preload="none" autoPlay={true} playsInline={true} controls={false} loop muted
            src="./img/adelante.mp4"
            alt='Video Formulario, Agencia de marketing'

          >
            Tu navegador no soporta la etiqueta de video HTML5.
          </video>
        </div>
      </div>
      <ToastContainer />

    </div>
  )
}
/*NUEVA*/
export default Formulario