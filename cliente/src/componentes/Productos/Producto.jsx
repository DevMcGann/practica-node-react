import React from 'react'
import clienteAxios from '../../axios'
import Swal from 'sweetalert2'

const Producto = ({producto}) => {

    const{_id, nombre, precio, desc, imagen} = producto;

    // elimina un producto
    const eliminarProducto = id => {
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
              clienteAxios.delete(`/productos/${id}`)
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
                <img src={`http://localhost:5000/${imagen}`} alt={_id}/>
            </div>
            <div className="texto">
                <h1>{nombre}</h1>
                <h2>{desc}</h2>
                <p>$ {precio}</p>
                <button 
                    type="button" 
                    onClick={() => eliminarProducto(_id) }>
                    Eliminar
            </button>
                
            </div>
           
        </article>
     );
}
 
export default Producto;
