import React,{useState,useEffect} from 'react'
import clienteAxios from '../../axios'
import Usado from './Usado'
import './usados.scss'

const Usados = () => {

    const [usados, setUsados] = useState([])

    useEffect(()=>{
        const consultarApi = async () => {
            try {
                const listaUsados = await clienteAxios.get('/usados')
                if (!listaUsados.data){
                    return;
                }else{
                    setUsados(listaUsados.data)
                }
                
            } catch (error) {
             console.log(error)
             alert("hubo un problema cargando la lista de productos usados")   
            }
        }
        consultarApi();
    },[usados])

    
    return ( 
        
        <section className="productos-usados-container" id="usados">
            {usados ?
            <React.Fragment> 
            <h2 className="titulo-usados">Productos Usados</h2>

            <div className="lista-productos-usados">
                {usados.map((usado)=>(
                    <Usado 
                        key={usado._id}
                        usado={usado}
                    />
                ))}
            </div>
            </React.Fragment>
            : 
            null
            }

        </section>
        
     );
}
 
export default Usados;