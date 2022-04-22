import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './reducer.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        dispatch({
            type: 'delete',
            payload: todoId,
        });
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId,
        });
    }

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });
    }

    return (
        <div>
            <h1>To do App</h1>
            <hr/> 
            <div className='row'>
                <div className='col-md-7'>
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className='col-md-5'>
                    <TodoAdd handleAdd = {handleAdd} />
                </div>
            </div>
        </div>
    );
};
