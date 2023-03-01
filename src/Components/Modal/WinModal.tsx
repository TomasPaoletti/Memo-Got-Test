import React from 'react'
import { Props } from '../Memotest'


const WinModal: React.FC<Props> = ({ handleRestart }) => {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <h1>¡Ganaste!</h1>
                <p>Has evitado la llegada de los White Walkers</p>
                <button onClick={handleRestart}>De nuevo</button>
            </div>
        </div>
    )
}

export default WinModal