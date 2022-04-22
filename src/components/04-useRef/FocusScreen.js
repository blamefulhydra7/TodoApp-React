import React, { useRef } from 'react'
import './ref.css'

export const FocusScreen = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.select();
    }
    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input ref={inputRef} className='form-control mb-3' placeholder='Su nombre'/>
            <button className='btn btn-primary' onClick={handleClick}>Focus</button>
        </div>
    );
}
