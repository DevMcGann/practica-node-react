import React,{useContext} from 'react';
import {Link} from 'react-router-dom';

import {CRMContext} from '../CRMContext';



const Navbar = () => {


    const[auth, guardarAuth] = useContext(CRMContext);


    if(!auth.auth) return null;

    return ( 
        <React.Fragment>
        <header className="header">
            <Link to={'/'}><h3>Home</h3></Link>
            <Link to={'/productos/nuevo'}><h3>Nuevo Producto</h3></Link>
            <Link to={'/slider'}><h3>Slider</h3></Link>
            <Link to={'/'}><h3>Cerrar Sesion</h3></Link>
          
        </header>
        </React.Fragment>
     );
}
 
export default Navbar;