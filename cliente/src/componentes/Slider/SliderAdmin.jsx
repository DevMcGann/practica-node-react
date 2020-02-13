import React,{useState,useEffect, useContext} from 'react';
import clienteAxios from '../../axios';
import NuevoSlider from './NuevoSlider';
import SliderItem from './SliderItem.jsx';
import './slideradmin.scss'
import Forbidden from '../Forbidden.js'
import {CRMContext} from '../../CRMContext'


const SliderAdmin = () => {

     const[auth, guardarAuth] = useContext(CRMContext);
      

    if(!auth.auth) return <Forbidden/>;

    return (
        <React.Fragment>
        <h1>Administrar el Slider</h1> 
        <div className="admin-container">
                 
            <NuevoSlider/>
        </div>
        </React.Fragment>
     );
}
 
export default SliderAdmin;