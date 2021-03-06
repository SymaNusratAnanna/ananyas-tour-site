import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Sociallogin from '../Sociallogin/Sociallogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
const location = useLocation();

let from = location.state?.from?.pathname || "/";
let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const[sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(user){
          navigate (from, {replace: true});
      }

      // error message
      if (error) {
        errorElement=<div>
          <p className='text-danger'>Error: {error?.message}</p>
        </div>
  }



    const handleSubmit = event =>{
        event.preventDefault();
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email,password);
    
    }
    const navigateRegister = event =>{
        navigate('/register');

    }

    const resetPassword = async() =>{
      const email=emailRef.current.value;
      await sendPasswordResetEmail(email);
       toast('sent email');
    }

    return (
        <div className='container w-50 mx-auto mt-2'>
            <h2 className='text-primary'>Please Login</h2>
            {/* Attach handleSubmit */}
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    {/* set reference */}
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    {/* set reference */}
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  {/* button set */}
  <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
    Login
  </Button>
  </Form>
  {errorElement}
  <p>New to Ananya's Tour Site? <Link to="/register"className='text-danger text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
  <p> Forget Password? <button className=' btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
  <Sociallogin></Sociallogin>
  <ToastContainer />
        </div>
    );
};

export default Login;