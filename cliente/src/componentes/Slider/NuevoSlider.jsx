import React,{useState,useContext} from 'react'
import clienteAxios from '../../axios'
import {CRMContext} from '../../CRMContext'
import Forbidden from '../Forbidden.js'

const NuevoSlider = () => {

    const[auth, guardarAuth] = useContext(CRMContext);
    const[slider, setSlider]=useState({
        titulo:'',
        desc:''
    })

    const[imagen, setImagen] = useState('')


    const agregarSlider = async e=> {
        e.preventDefault();

        const fd = new FormData();

        fd.append('titulo', slider.titulo);
        fd.append('desc', slider.desc);
        fd.append('imagen', imagen);

        try {
            const res = await clienteAxios.post('/slider', fd, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            })
            alert(res.data.mensaje);
        } catch (error) {
            console.log(error)
            alert("Hubo un error agregando Slider")
        }
    }

    const handleChange = e => {
        setSlider({
            ...slider,
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
            <h1>Nuevo Slider</h1>

            <form  className="formulario" onSubmit={agregarSlider}>

                <div className="campo">
                    <label>Titulo Slider</label>
                    <input type="text" placeholder="Titulo" name="titulo" onChange={handleChange}/>
                </div>

                <div className="campo">
                    <label>Descripción</label>
                    <input type="text" placeholder="desc" name="desc" onChange={handleChange}/>
                </div>

                <div className="campo">
                    <label className="label-imagen">Imagen</label>
                    <input type="file"  name="imagen" onChange={leerArchivo}/>
                </div>

                <input type="submit" className="boton" value="Agregar Slider"/>

            </form>

            

        </div>

     );
}
 
export default NuevoSlider;