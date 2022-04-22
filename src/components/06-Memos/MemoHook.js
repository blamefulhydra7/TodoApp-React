import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import './memos.css'

export const MemoHook = () => {
    const {counter, incrementar} = useCounter(1);
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
    };
    const procesoPesado = (counter) => {
        for (let i = 0; i < counter; i++) {
            console.log('For');
        }
        return `${counter} iteraciones completas`;
    };
    const procesoMemo = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <div>
            <h1>Memorize Hook</h1>
            <h3>Counter: {counter}</h3>
            <h4>{procesoMemo}</h4>
            <hr/>
            <button className='btn btn-primary mx-2' onClick={incrementar}>Incrementar</button>
            <button className='btn btn-primary' onClick={handleShow}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
