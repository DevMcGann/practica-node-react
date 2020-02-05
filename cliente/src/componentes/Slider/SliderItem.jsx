import React from 'react'
import clienteAxios from '../../axios'
import Swal from 'sweetalert2'
import {CRMContext} from '../../CRMContext'

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
        <article className="slider-container">
            <div className="imagen">
                <img src={`http://localhost:5000/${imagen}`} alt={_id}/>
            </div>
            <div className="texto">
                <h1>{nombre}</h1>
                <h2>{desc}</h2>
                <p>$ {precio}</p>
                {auth.auth?
                <button 
                    type="button" 
                    onClick={() => eliminarSlider(_id) }>
                    Eliminar
                </button>
                : null}
                
                
            </div>
           
        </article>
     );
}
 
export default SliderItem;
