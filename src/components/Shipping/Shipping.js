import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const Shipping = () => {
    const [user]=useAuthState(auth)
    const [email, setEmail]=useState();
    const [name, setName]=useState();
    const [address, setAddress]=useState();
    const [phone, setPhone]=useState();
    const [error, setError]=useState();

    
    const handleNameBlur=(event)=>{
        setName(event.target.value);
    }
    const handleAddressBlur=event=>{
        setAddress(event.target.value)
    }
    const handlePhoneBlur=event=>{
        setPhone(event.target.value);
    }

    const handleAddShipping=(event)=>{
       event.preventDefault()
       const shippingInfo={name, email, address, phone};
       console.log(shippingInfo)
    }

    return (
        <div className='from-container'>
            <div>
                <h2 className='from-titile'>Registration</h2>
                <form onSubmit={handleAddShipping}>
                    <div className="input-group">
                        <label htmlFor="email">email</label>
                        <input value={user?.email} readOnly type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">name</label>
                        <input onBlur={handleNameBlur} type="text" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">adress</label>
                        <input onBlur={handleAddressBlur} type="text" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Phone">Phone number</label>
                        <input onBlur={handlePhoneBlur} type="text" required />
                    </div>
                   
                    <input className='form-submit' type="submit" value="add shipping" />
                </form>
               
            </div>
        </div>
    );
};

export default Shipping;