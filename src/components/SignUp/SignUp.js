import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [confirmPassword, setConfirmPassword]=useState();
    const [error, setError]=useState();
    const [createUserWithEmailAndPassword, user]=useCreateUserWithEmailAndPassword(auth);
    const navigate=useNavigate();
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }
    const handleConfrimPassword=event=>{
        setConfirmPassword(event.target.value)
    }
    if(user){
        navigate('/shop')
    }

    const handleCreateAccount=(event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            setError('password did not matched')
            return;
        }
        if(password.length<6){
            setError('password must be 6 charceter ')
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='from-container'>
            <div>
                <h2 className='from-titile'>Registration</h2>
                <form onSubmit={handleCreateAccount}>
                    <div className="input-group">
                        <label htmlFor="email">email</label>
                        <input onBlur={handleEmail} type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input onBlur={handlePassword} type="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">confirm password</label>
                        <input onBlur={handleConfrimPassword} type="password" required />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Registration" />
                </form>
                <p>
                    new to ema-jhon? <Link className='form-link' to={'/login'}>login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;