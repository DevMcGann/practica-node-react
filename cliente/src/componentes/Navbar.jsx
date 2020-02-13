import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import {CRMContext} from '../CRMContext';



const Navbar = (props) => {


    const[auth, guardarAuth] = useContext(CRMContext);

    const cerrarSesion = () => {
        // auth.auth = false y el token se remueve
        guardarAuth({
            token: '',
            auth: false
        });

        localStorage.setItem('token', '');

        // redireccionar
        props.history.push('/');
    }


    if(!auth.auth) return null;

    return ( 
        <React.Fragment>
        <header className="header">
            <Link to={'/'}><h3>Home</h3></Link>
            <Link to={'/productos/nuevo'}><h3>Nuevo Producto</h3></Link>
            <Link to={'/usados/nuevo'}><h3>Nuevo Usado</h3></Link>
            <Link to={'/slider'}><h3>Slider</h3></Link>
            <h3 onClick={cerrarSesion}>Cerrar Sesion</h3>
          
        </header>
        </React.Fragment>
     );
}
 
export default withRouter(Navbar);