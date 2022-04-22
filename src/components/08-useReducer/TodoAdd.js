import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAdd}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 2)
        {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        handleAdd(newTodo);
        reset();
    };

    return (
        <>
            <h4>Agregar To do</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input type='test' name='description' placeholder='Aprender...' autoComplete='off' className='form-control' onChange={handleInputChange} value={description}/>
                <button className='btn btn-outline-primary mt-1 d-block'>Agregar</button>
            </form>
        </>
    )
}
