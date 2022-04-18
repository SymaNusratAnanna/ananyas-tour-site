import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 '>
            {/* dynamic year */}
            <p><small>Powered by Ananya @ {year}</small></p>
        </footer>
    
        
    );
};

export default Footer;