import React,{useState,useEffect,useContext} from 'react'
import clienteAxios from '../../axios'
import Producto from './Producto'
import {CRMContext} from '../../CRMContext'



const Productos = () => {

    const [productos, setProductos] = useState([])

     const [auth, guardarAuth] = useContext(CRMContext); 
   

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
        <section className="productos-container" id="productos">
            <h2 className="titulo-productos">Productos</h2>

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