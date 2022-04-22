import React, { useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    return (
        <>
            <h1>Simple Form</h1>
            <hr/>
            <div className='mb-3'>
                <input 
                    type='text'
                    name='name'
                    value={name}
                    placeholder='Tu nombre'
                    autoComplete='off'
                    className='form-control'
                    onChange={handleInputChange}
                />
            </div>
            <div className='mb-3'>
                <input 
                    type='text'
                    name='email'
                    value={email}
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    className='form-control'
                    onChange={handleInputChange}
                />
            </div>
            {(name === 'Leonardo') && <Message />}
        </>
    )
}
