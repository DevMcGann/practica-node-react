import React from 'react';
//import {CRMContext, CRMProvider} from './CRMContext';

import NavbarPublica from './componentes/NavbarPublica';
import Slider from './componentes/Slider/Slider.jsx';
import Footer from './componentes/Footer/Footer';
import Usados from './componentes/Usados/Usados.jsx'
import Productos from './componentes/Productos/Productos';


const Pagina = () => {



    return ( 
        <React.Fragment>
            <NavbarPublica/>
            <div className="contenedor-slider-general">
                <Slider/>
            </div>
            <Productos/>
            <Usados/>
            <Footer/>
        </React.Fragment>
     );
}
 
export default Pagina;