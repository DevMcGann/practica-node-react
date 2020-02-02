import React from 'react';
import './Login.css'

const Login = () => {
    return ( 
        <div className="login">
            <input type="text" className="campo-login" placeholder="Email"/>
            <input type="text" className="campo-login" placeholder="Password"/>
            <input type="button" className="boton" value="Iniciar Sesión"/>
        </div>
     );
}
 
export default Login;