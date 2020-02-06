import React,{useContext} from 'react'
import clienteAxios from '../../axios'
import Swal from 'sweetalert2'
import {CRMContext} from '../../CRMContext'
import './sliderItem.scss'

const SliderItem = ({slider}) => {

    const[auth,guardarAuth] = useContext(CRMContext)

    const{_id, titulo, desc, imagen} = slider;

    // elimina un producto
    const eliminarSlider = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un Slider eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText : 'No, Cancelar'
        }).then((result) => {
            if (result.value) {
              // eliminar en la rest api
              clienteAxios.delete(`/slider/${id}`)
                .then(res => {
                    if(res.status === 200) {
                        Swal.fire(
                            'Eliminado',
                            res.data.mensaje,
                            'success'
                        )
                    }else{
                        alert("Paso´algo che...")
                    }
                })
            }
        })
    }

    return ( 
        <article id="slider-container">
                <img src={`http://localhost:5000/${imagen}`} alt={_id} id="img-slider"/>
                <h1 id="titulo-slider"><span>{titulo}</span></h1>
                <h2 id="desc-slider"><span>{desc}</span></h2>
                {auth.auth?
                <button
                    id="eliminar"
                    type="button" 
                    onClick={() => eliminarSlider(_id) }>
                    Eliminar
                    
                </button>
                : null}
                
                
            
        </article>
     );
}
 
export default SliderItem;
