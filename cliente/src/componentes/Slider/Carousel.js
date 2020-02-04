import React from 'react';
const Carousel = require('react-responsive-carousel').Carousel;


const Slider = () => {
    return ( 
 
         <Carousel showArrows={true} >
                <div>
                    <img src="./Pics/iphones.jpg" />
                    <p className="legend">Iphones</p>
                </div>
                <div>
                    <img src="./Pics/samsungs.jpg" />
                    <p className="legend">Samsumgs</p>
                </div>
                <div>
                    <img src="./Pics/xiaomis.jpg" />
                    <p className="legend">Xiaomis</p>
                </div>
                <div>
                    <img src="./Pics/huaweis.jpg" />
                    <p className="legend">Huaweiis</p>
                </div>
            </Carousel>


     );
}
 
export default Slider;