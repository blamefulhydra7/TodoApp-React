import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const {name, email, password} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
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
            <div className='mb-3'>
                <input 
                    type='password'
                    name='password'
                    value={password}
                    placeholder='*****'
                    className='form-control'
                    onChange={handleInputChange}
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    )
}
