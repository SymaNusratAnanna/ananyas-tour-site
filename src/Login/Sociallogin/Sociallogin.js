import React from 'react';
import google from '../../images/logo/google.png'

const Sociallogin = () => {
    return (
        <div>
        <div className='d-flex align-items-center'>
            
                <div style={{height:"1px"}} className='bg-primary w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                
                <div style={{height:"1px"}} className='bg-primary w-50'></div>
                </div>
            <button className='btn btn-light w-50 d-block mx-auto'>
                <img style={{width: '30px'}} src={google} alt="" />
                oogle Sign In
            </button>
        </div>
        
    );
};

export default Sociallogin;