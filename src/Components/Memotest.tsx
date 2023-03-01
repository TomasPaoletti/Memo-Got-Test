import { IMAGES } from '../images'
import { useEffect, useState } from 'react'
import GOT from '../Assets/GOT.jpg'
import InitModal from './Modal/InitModal'
import WinModal from './Modal/WinModal'
import LoseModal from './Modal/LoseModal'
import './Memotest.css'

export interface Props {
    handleRestart?: any;
    handleStart?: any;
}

function Memotest() {

    const [selected, setSelected] = useState<string[]>([])
    const [correct, setCorrect] = useState<string[]>([])
    const [timer, setTimer] = useState<number>(0)
    const [showStart, setShowStart] = useState<boolean>(true)
    const [showLose, setShowLose] = useState<boolean>(false)
    const [showWin, setShowWin] = useState<boolean>(false)

    useEffect(() => {
        if (selected.length === 2) {
            if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
                setCorrect((correct) => correct.concat(selected))
            }
            setTimeout(() => setSelected([]), 500);
        }
    }, [selected])

    useEffect(() => {
        if (correct.length === IMAGES.length) {
            setShowWin(true)
        }
    }, [correct])

    useEffect(() => {
        let interval: number;
        const decrementTimer = async () => {
            timer === 0 ?
                (clearInterval(interval)
                ) : (
                    await new Promise(resolve => setTimeout(resolve, 1000)),
                    setTimer(timer - 1),
                    timer <= 1 ? (setShowLose(true)) : (clearInterval(interval))
                )
        }
        interval = setInterval(decrementTimer, 1000);
        return () => clearInterval(interval);
    }, [timer])

    const start = () => {
        setShowStart(false)
        setTimer(30)
    }

    return (<>
        {showStart && (
            <InitModal handleStart={(() => start())} />
        )}
        {showWin && (
            <WinModal handleRestart={(() => location.reload())} />
        )}
        {showLose && (
            <LoseModal handleRestart={(() => location.reload())} />
        )}
        <h1>Memo Got Test</h1>
        <h3>Te quedan: {timer} seg</h3>
        <ul>
            {IMAGES.map((image) => {
                const [, url] = image.split("|")
                return (
                    <li key={image}
                        onClick={() => selected.length < 2 && setSelected((selected) => selected.concat(image))}>
                        {selected.includes(image) || correct.includes(image) ?
                            (<img alt='image' src={url} />
                            ) : (
                                <img alt='icon' src={GOT} />)
                        }
                    </li>
                )
            })}
        </ul>
    </>
    )
}

export default Memotest
