import React from 'react'
import clienteAxios from '../../axios';
import NuevoSlider from './NuevoSlider';


const SliderAdmin = () => {
    return ( 
        <div className="admin-container">
            <h1>Administrar el Slider</h1>
            <NuevoSlider/>
        </div>
     );
}
 
export default SliderAdmin;