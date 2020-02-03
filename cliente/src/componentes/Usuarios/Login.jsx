import React,{useState,useContext} from 'react';
import './Login.css'
import Swal from 'sweetalert2'
import clienteAxios from '../../axios.js'
import {withRouter} from 'react-router-dom'

import {CRMContext} from '../../CRMContext.js'

const Login = (props) => {

    const [auth, guardarAuth] = useContext(CRMContext); 
    const [credenciales, setCredenciales] = useState({}); /*Formulario login*/

  const iniciarSesion = async e => {
      e.preventDefault();
      try {
          const respuesta = await clienteAxios.post('/admin', credenciales);
          const {token} = respuesta.data;
          localStorage.setItem('token', token);
          guardarAuth({
              token,
              auth:true
          });
          Swal.fire(
              'Login Correcto',
              'Has iniciado Sesión',
              'success'
          );

          props.history.push('/')

      } catch (error) {
          console.log(error);
          Swal.fire({
              type:'error',
              tittle:'Hubo un error al Iniciar Sesión',
              text:error.response.data.mensaje
          });
      }
  }  



  const leerDatos = e => {
        guardarCredenciales({
            ...credenciales,
            [e.target.name] : e.target.value
        })
    }


    return ( 
        <div className="login">
            <input type="text" className="campo-login" placeholder="Email" required onChange={leerDatos}/>
            <input type="text" className="campo-login" placeholder="Password" required onChange={leerDatos}/>
            <input type="submit" className="boton" value="Iniciar Sesión" onSubmit={iniciarSesion}/>
        </div>
     );
}
 
export default withRouter(Login);