import React from 'react';
import {Link} from 'react-router-dom'
import imagen from './stop.jpeg'

const Forbidden = () => {
    return ( 
        <div className="stop">
            <img src={imagen} alt="stop"/>
            <Link to='/'>Home</Link>
        </div>
     );
}
 
export default Forbidden;