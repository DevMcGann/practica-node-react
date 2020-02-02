import React,{useState} from 'react';
import clienteAxios from '../../axios';
import './UsuarioNuevo.css'

const UsuarioNuevo = () => {

    const[nuevoUsuario, setNuevoUsuario] = useState({
        email:'',
        dni:''
    });

    const handleChange = e => {
        setNuevoUsuario({
            ...nuevoUsuario,
        [e.target.name]:e.target.value
        })
    };

    const Submit = async e => {
        e.preventDefault();
        
        try {
            const res = await clienteAxios.post('/admin/nuevo', nuevoUsuario)
            console.log(res)
            alert("Creado");
        } catch (error) {
            console.log(error)
            alert("Hubo un error agregando Usuario")
        }

    }

    return ( 
        <div className="usuario-nuevo">
            <h1>Nuevo Admin</h1>
            <p>Prueba: prueba@prueba.com  123</p>
            <form  className="nuevo-usuario" onSubmit={Submit}>
                <input type="text" placeholder="Email" name="email" onChange={handleChange}/>
                <input type="text" placeholder="DNI sin puntos ni espacios" name="dni" onChange={handleChange}/>
                <input type="submit"  value="Crear"/>
            </form>
        </div>
     );
}
 
export default UsuarioNuevo;