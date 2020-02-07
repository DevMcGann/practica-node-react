import React from 'react';
import logo from '../logo.png'
import {Link} from 'react-router-dom'

const NavbarPublica = (props) => {



    return ( 
        <div className="nav-publica">
            <div className="logo" >
                <Link to='/'><img src={logo} alt="lgo"/></Link>
            </div>
            <div className="navegacion">
                <a href="#productos">Productos</a>
                <a href="#usados">Usados</a>
                <a href="#contacto">Contacto</a>
            </div>
        </div>
     );
}
 
export default NavbarPublica;