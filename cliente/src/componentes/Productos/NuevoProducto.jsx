import React,{useState, useContext} from 'react'
import clienteAxios from '../../axios'
import {CRMContext} from '../../CRMContext'
import Forbiden from '../Forbidden.js'

const NuevoProducto = () => {

    const[auth,guardarAuth] = useContext(CRMContext)


    const[producto, setProducto]=useState({
        nombre:'',
        precio:'',
        desc:''
    })

    const[imagen, setImagen] = useState('')


    const agregarProducto = async e=> {
        e.preventDefault();

        const fd = new FormData();

        fd.append('nombre', producto.nombre);
        fd.append('precio', producto.precio);
        fd.append('desc', producto.desc);
        fd.append('imagen', imagen);

        try {
            const res = await clienteAxios.post('/productos', fd, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            })
            alert(res.data.mensaje);
        } catch (error) {
            console.log(error)
            alert("Hubo un error agregando producto")
        }
    }

    const handleChange = e => {
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        });
    }

    //imagen
    const leerArchivo = e => {
        setImagen(e.target.files[0]);
    }


    
  if(!auth.auth && (localStorage.getItem('token') === auth.token ) ) {
        return <Forbiden/>
    }

    return ( 
        <div className="nuevo">
            <h1>Nuevo Producto</h1>

            <form  className="formulario" onSubmit={agregarProducto}>

                <div className="campo">
                    <label>Nombre Producto</label>
                    <input type="text" placeholder="Nombre del Producto" name="nombre" required onChange={handleChange}/>
                </div>

                <div className="campo">
                    <label>Precio</label>
                    <input type="text" placeholder="Precio" name="precio" required onChange={handleChange}/>
                </div>

                <div className="campo">
                    <label>Descripción</label>
                    <input type="text" placeholder="desc" name="desc" required onChange={handleChange}/>
                </div>

                <div className="campo campo-imagen">
                    <label>Imagen (Es recomendable subir imágenes del mismo tamaño)</label>
                    <input type="file"  name="imagen" onChange={leerArchivo} required/>
                </div>

                <input type="submit" className="boton" value="Agregar Producto"/>

            </form>


        </div>
     );
}
 
export default NuevoProducto;

