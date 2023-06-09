import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'
import img3 from '../../../assets/images/img3.jpg'
import img4 from '../../../assets/images/img4.jpg'
import img5 from '../../../assets/images/img5.jpg'
import img6 from '../../../assets/images/img6.jpg'
const Banner = () => {
    return (
        <div>
        <div> <h1 className='text-5xl text-center mt-40 text-yellow-400'>Award Winning Photography</h1></div>
        <Carousel className='max-w-screen-2xl mx-auto mt-10'>
        
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                <img src={img2} />
                
            </div>
            <div>
            <img src={img3} />
            
        </div>
        <div>
        <img src={img4} />
        
    </div>
    <div>
    <img src={img5} />
    
</div>
<div>
<img src={img6} />

</div>
               
            </Carousel>
            </div>
    );
};

export default Banner;

