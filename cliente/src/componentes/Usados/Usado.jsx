import React,{useContext} from 'react'
import clienteAxios from '../../axios'
import Swal from 'sweetalert2'
import {CRMContext} from '../../CRMContext'

const Usado = ({usado}) => {

    const[auth,guardarAuth] = useContext(CRMContext)

    const{_id, nombre, precio, desc, imagen} = usado;

    // elimina un producto
    const eliminarUsado = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un producto eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText : 'No, Cancelar'
        }).then((result) => {
            if (result.value) {
              // eliminar en la rest api
              clienteAxios.delete(`/usados/${id}`)
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
        <article className="producto-container">
            <div className="imagen">
                <img src={`http://localhost:5000/usados/${imagen}`} alt={_id}/>
            </div>
            <div className="texto">
                <h1>{nombre}</h1>
                <h2>{desc}</h2>
                <p>$ {precio}</p>
                {auth.auth?
                <button 
                    type="button" 
                    onClick={() => eliminarUsado(_id) }>
                    Eliminar
                </button>
                : null}
                
                
            </div>
           
        </article>
     );
}
 
export default Usado;
