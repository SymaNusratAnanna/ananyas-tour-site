import React from 'react';

import picture from '../../images/about me/ananya1_n.jpg'

const About = () => {
    return (
        // flex element
        <div className='d-flex'>
         <div>
            <img src={picture} height="400px" width="400px" alt="" /></div>

            <div>
            <h2>Hi I am Ananya!!</h2>
            
            <h3> My passion is to become a Mern Stack Web Developer.I know that requires damn hardwork .I am trying with my best to be better day by day .I hope i will achieve my goal through this hardwork one day.And my dream to build an IT firm of my own one day. & Those dream keep me on track. </h3>
        </div>
        </div>
    );
};

export default About;