import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const from = location.state?.from?.pathname || "/";
   

   
  

    const hanleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }
    
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='from-container'>
            <div>
                <h2 className='from-titile'>Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">email</label>
                        <input onBlur={hanleEmail} type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input onBlur={handlePassword} type="password" />
                    </div>
                    <p>{error?.message}</p>
                    <p>{loading && 'loadiing...'}</p>
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p>
                    new to ema-jhon? <Link className='form-link' to={'/signup'}>create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;