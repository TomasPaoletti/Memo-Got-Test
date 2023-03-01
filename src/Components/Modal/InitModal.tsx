import React from 'react'
import { Props } from '../Memotest'
import './InitModal.css'

const InitModal: React.FC<Props> = ({ handleStart }) => {
    return (
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <h1>Bienvenido a Memo Got Test</h1>
                    <p>Encuentra los personajes iguales detrás de las cartas para ganar. Tienes 30 seg.</p>
                    <button onClick={handleStart}>Empezar</button>
                </div>
            </div>
        </>
    )
}

export default InitModal