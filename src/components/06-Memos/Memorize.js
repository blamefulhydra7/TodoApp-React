import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import './memos.css'

export const Memorize = () => {
    const {counter, incrementar} = useCounter(1);
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
    };
    return (
        <div>
            <h1>Memorize <Small value = {counter} /></h1>
            <hr/>
            <button className='btn btn-primary mx-2' onClick={incrementar}>Incrementar</button>
            <button className='btn btn-primary' onClick={handleShow}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
