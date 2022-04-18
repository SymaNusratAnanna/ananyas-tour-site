import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/logo/google.png'

const Sociallogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    // error message
let errorElement;

    if (error) {
          errorElement=<div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
    }

if (user){
    navigate('/home');
}
        

    return (
        <div>
        <div className='d-flex align-items-center'>
            
                <div style={{height:"1px"}} className='bg-primary w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                
                <div style={{height:"1px"}} className='bg-primary w-50'></div>
                </div>
                {errorElement}
            <button 
            onClick={()=> signInWithGoogle()}
            className='btn btn-light w-50 d-block mx-auto'>
                <img style={{width: '30px'}} src={google} alt="" />
                oogle Sign In
            </button>
        </div>
        
    );
};

export default Sociallogin;