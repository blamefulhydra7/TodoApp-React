import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './examples.css'

export const MultipleCustomHooks = () => {
    const {counter, incrementar} = useCounter(1);

    const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {quote, author} = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>Loading...</div>
                    )
                :
                    (
                        <blockquote className='blockquote text-center'>
                            <p className='mb-4'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }
            <button className='btn btn-primary' onClick={incrementar}>Next Quote</button>
        </div>
    )
}
