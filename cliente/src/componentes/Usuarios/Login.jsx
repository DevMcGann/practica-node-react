import React,{useState,useContext} from 'react';
import './Login.css'
import Swal from 'sweetalert2'
import clienteAxios from '../../axios.js'
import {withRouter} from 'react-router-dom'

import {CRMContext} from '../../CRMContext.js'

const Login = (props) => {

    const [auth, guardarAuth] = useContext(CRMContext); 
    console.log('desde login ',auth)
    const [credenciales, setCredenciales] = useState({}); /*Formulario login*/

  const iniciarSesion = async e => {
      e.preventDefault();
      try {
          const respuesta = await clienteAxios.post('/admin', credenciales);
          const {token} = respuesta.data;
          localStorage.setItem('token', token);
          
          guardarAuth({
                token, 
                auth: true
            });


          Swal.fire(
              'Login Correcto',
              'Has iniciado Sesión',
              'success'
          );

          props.history.push('/')

      } catch (error) {
        alert(JSON.stringify(credenciales))
          console.log(error);
          Swal.fire({
              type:'error',
              tittle:'Hubo un error al Iniciar Sesión',
              text:error.response.data.mensaje
          });
      }
  }  



  const leerDatos = e => {
        setCredenciales({
            ...credenciales,
            [e.target.name] : e.target.value
        })
    }


    return ( 
        <div className="login">
            <p>Ingresa con el usuario prueba@prueba.com / contraseña: 123</p>
            <p>Inicio Sesión Administrador</p>
            <input type="text" className="campo-login" placeholder="Email" name="email" required onChange={leerDatos}/>
            <input type="text" className="campo-login" placeholder="Password" name="dni" required onChange={leerDatos}/>
            <input type="button" className="boton" value="Iniciar Sesión" onClick={iniciarSesion}/>
        </div>
     );
}
 
export default withRouter(Login);