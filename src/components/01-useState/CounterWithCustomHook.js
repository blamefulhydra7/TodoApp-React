import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const {state, incrementar, decrementar, reset} = useCounter(0);
    return (
        <>
            <h1>Counter with custom hook {state}</h1>
            <hr/>
            <button className='btn' onClick={() => incrementar(1)}>+1</button>
            <button className='btn' onClick={reset}>reset</button>
            <button className='btn' onClick={() => decrementar(1)}>-1</button>
        </>
  )
}
