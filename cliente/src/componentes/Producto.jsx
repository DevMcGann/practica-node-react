import React from 'react'
import clienteAxios from '../axios'

const Producto = ({producto}) => {

    const{_id, nombre, precio, desc, imagen} = producto;

    const eliminarProducto = id => {
        try {
            clienteAxios.delete(`/productos/${id}`)
            alert("Eliminado")
        } catch (error) {
            alert("Error al eliminar")
            console.log(error)
        }
    }

    return ( 
        <article className="producto-container">
            <div className="imagen">
                <img src={`http://localhost:5000/${imagen}`} alt={_id}/>
            </div>
            <div className="texto">
                <h1>{nombre}</h1>
                <h2>{desc}</h2>
                <p>{precio}</p>
                <a href="#" onClick={eliminarProducto(_id)}>Eliminar</a>
            </div>
        </article>
     );
}
 
export default Producto;
