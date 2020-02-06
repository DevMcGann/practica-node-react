import React,{useState,useEffect, useContext} from 'react';
import clienteAxios from '../../axios';
import NuevoSlider from './NuevoSlider';
import SliderItem from './SliderItem.jsx';
import './slideradmin.scss'
import {CRMContext} from '../../CRMContext'


const SliderAdmin = () => {

     const[auth, guardarAuth] = useContext(CRMContext);
      const [slider, setSlider] = useState([])
    
        useEffect(()=>{
        const consultarApi = async () => {
            try {
                const listaSlider = await clienteAxios.get('/slider')
                setSlider(listaSlider.data)
            } catch (error) {
             console.log(error)
             alert("hubo un problema cargando la lista de Sliders")   
            }
        }
        consultarApi();
    },[slider])


    if(!auth.auth) return null;

    return (
        <React.Fragment>
        <h1>Administrar el Slider</h1> 
        <div className="admin-container">
            
            {slider ? 
            <div className="galeria-slider">
                {slider.map((sli)=>{
                    return(
                        <div className="slide" key={sli._id}>
                        <SliderItem 
                                key={sli._id}
                                slider={sli}
                        />
                        </div>
                )
                })}
            </div>
            :null}
            <NuevoSlider/>
        </div>
        </React.Fragment>
     );
}
 
export default SliderAdmin;