import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            {show && <MultipleCustomHooks />}
            <button className='btn btn-primary mt-4' onClick={handleClick}>Show/Hide</button>
        </div>
    )
}
