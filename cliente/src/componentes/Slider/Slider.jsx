import React,{useState,useEffect} from 'react'
import clienteAxios from '../../axios'
import SliderItem from './SliderItem'
import './slider.scss'


const Slider = () => {
    const [slider, setSlider] = useState([])
    const [x,setX] = useState(0);

   /* const goLeft = () => {
       x === 0 ? setX(-100 * (slider.length -1)) : setX(x+100); 
    }*/

    const goRight = () => {
        x === -100 *(slider.length -1) ? setX(0) : setX(x - 100);
    }

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

        function temporizador() {
            setTimeout(function(){ 
                goRight(); 
            }, 6000);
        }

        temporizador();
        consultarApi();
    },[x]);

    return ( 
        <div className="slider">
        {slider.map((sli)=>{
            return(
                <div className="slide"  key={sli._id} style={{transform:`translateX(${x}%)`}}>
                   <SliderItem 
                        key={sli._id}
                        slider={sli}
                   />
                </div>
            )
        })}
        {/*<button id="goLeft" onClick={goLeft}><i className="fas fa-chevron-left"></i></button>*/}
        {/*<button id="goRight" onClick={goRight}><i className="fas fa-chevron-right"></i></button>*/}
    </div>
     );
}
 
export default Slider;