import React from 'react';
import './footer.scss'

const Footer = () => {
    return ( 
        <div className="footer" id="contacto">
            <h1>Contacto</h1>
            <div className="contacto">
                <div className="redes">
                    <a href="#contacto"><i className="fab fa-whatsapp-square"></i></a>
                    <p>0123 - 456789</p>
                </div>
                <div className="redes">
                    <a href="http://www.gmail.com"><i className="fas fa-at"></i></a>
                    <p>Paginadeprueba@prueba.com</p>
                </div>
                <div className="redes">
                    <a href="http://www.instagram.com"><i className="fab fa-instagram-square"></i></a>
                    <p>instagram.prueba</p>
                </div>
                <div className="redes">
                    <a href="http://www.faceook.com"><i className="fab fa-facebook-square"></i></a>
                    <p>Facebook Prueba</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;