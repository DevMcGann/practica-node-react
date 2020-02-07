import React,{useContext} from 'react';
import {CRMContext, CRMProvider} from './CRMContext';

import NavbarPublica from './componentes/NavbarPublica';
import Slider from './componentes/Slider/Slider.jsx';
import Footer from './componentes/Footer/Footer';
import Usados from './componentes/Usados/Usados.jsx'
import Productos from './componentes/Productos/Productos';


const Pagina = () => {

    const [auth, guardarAuth] = useContext(CRMContext)


    return ( 
        <CRMProvider value={[auth,guardarAuth]} >
            <NavbarPublica/>
            <div className="contenedor-slider-general">
                <Slider/>
            </div>
            <Productos/>
            <Usados/>
            <Footer/>
        </CRMProvider>
     );
}
 
export default Pagina;