import React from 'react'
import { Props } from '../Memotest'


const LoseModal: React.FC<Props> = ({ handleRestart }) => {
    return (
        <>
            <div className='modal'>
                <div className='modal-content'>
                    <h1>¡Has perdido!</h1>
                    <p>¡El gran invierno a llegado y es tu culpa!</p>
                    <button onClick={handleRestart}>Reintentar</button>
                </div>
            </div>
        </>
    )
}

export default LoseModal