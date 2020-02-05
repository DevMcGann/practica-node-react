import React,{useState,useEffect} from 'react';
import SliderItem from './SliderItem.jsx';

const MySlider = () => {

    const [item, setItem] = useState([
        {
        _id:'1',
        imagen:'../../../../public/Pics/iphones.jpg',
        titulo:'Iphones Reacondicionados',
        desc:'Reacondicionados, como nuevos! Impecables'
        },
        {
        _id:'2',
        imagen:'../../../../public/Pics/xiaomis.jpg',
        titulo:'Xiaomi',
        desc:'Reacondicionados, como nuevos! Impecables'
        },
        {
        _id:'3',
        imagen:'../../../../public/Pics/huaweis.jpg',
        titulo:'Huaweii',
        desc:'Reacondicionados, como nuevos! Impecables'
        }

    ]);

    const [itemActual, setItemActual] = useState([]);

    const cambiarItemActual = () => {
        
    }

    useEffect( ()=>{
        //traer los datos de la API y ponerlas en el state
        //por ahora, datos estaticos
        function tiempo() {
            setTimeout(function(){ 
                alert("Hello");
            }, 3000);
        }

        tiempo()

    },[]);

    return (  
        <div className="slider">
            <h1>Sere un hermoso Slider</h1>
        </div>
    );
}
 
export default MySlider;