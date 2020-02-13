import React,{useState,useContext} from 'react'
import clienteAxios from '../../axios'
import {Link} from 'react-router-dom'
import Forbidden from '../Forbidden.js'
import {CRMContext} from '../../CRMContext'


const NuevoUsado = () => {

    const[auth, guardarAuth] = useContext(CRMContext);

    const[usado, setUsado]=useState({
        nombre:'',
        precio:'',
        desc:''
    })

    const[imagen, setImagen] = useState('')


    const agregarUsado = async e=> {
        e.preventDefault();

        const fd = new FormData();

        fd.append('nombre', usado.nombre);
        fd.append('precio', usado.precio);
        fd.append('desc', usado.desc);
        fd.append('imagen', imagen);

        try {
            const res = await clienteAxios.post('/usados', fd, {
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
        setUsado({
            ...usado,
            [e.target.name] : e.target.value
        });
    }

    //imagen
    const leerArchivo = e => {
        setImagen(e.target.files[0]);
    }


    if(!auth.auth) return <Forbidden/>;


    return ( 
        <div className="nuevo">
            <h1>Nuevo Producto Usado</h1>

            <form  className="formulario" onSubmit={agregarUsado}>

                <div className="campo">
                    <label>Nombre Producto</label>
                    <input type="text" placeholder="Nombre del Producto" name="nombre" onChange={handleChange}/>
                </div>

                <div className="campo">
                    <label>Precio</label>
                    <input type="text" placeholder="Precio" name="precio" onChange={handleChange}/>
                </div>

                <div className="campo">
                    <label>Descripción</label>
                    <input type="text" placeholder="desc" name="desc" onChange={handleChange}/>
                </div>

                <div className="campo">
                    <label>Imagen</label>
                    <input type="file"  name="imagen" onChange={leerArchivo}/>
                </div>

                <input type="submit" className="boton" value="Agregar Producto"/>

            </form>

            <Link to={'/'} className="a-boton">Volver a Productos</Link>

        </div>
     );
}
 
export default NuevoUsado;

