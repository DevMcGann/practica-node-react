import React,{useState,useEffect} from 'react'
import clienteAxios from '../../axios'
import Producto from './Producto'

const Productos = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        const consultarApi = async () => {
            try {
                const listaProductos = await clienteAxios.get('/productos')
                setProductos(listaProductos.data)
            } catch (error) {
             console.log(error)
             alert("hubo un problema cargando la lista de productos")   
            }
        }
        consultarApi();
    },[productos])

    return ( 
        <section className="productos-container">
            <h2>Productos</h2>

            <div className="lista-productos">
                {productos.map((producto)=>(
                    <Producto 
                        key={producto._id}
                        producto={producto}
                    />
                ))}
            </div>

        </section>
     );
}
 
export default Productos;