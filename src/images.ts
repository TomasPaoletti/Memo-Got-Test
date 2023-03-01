import Arya from './Assets/Arya.jpg'
import Bran from './Assets/Bran.jpg'
import Cersei from './Assets/Cersei.jpg'
import Daenerys from './Assets/Daenerys.jpg'
import Jaime from './Assets/Jaime.jpg'
import Jon from './Assets/Jon.jpg'
import King from './Assets/King.jpg'
import Robb from './Assets/Robb.jpg'
import Sansa from './Assets/Sansa.jpg'
import Tyrion from './Assets/Tyrion.jpg'

export const IMAGES = [
    Arya,
    Bran,
    Cersei,
    Daenerys,
    Jaime,
    Jon,
    King,
    Robb,
    Sansa,
    Tyrion
].flatMap((image) => [`a|${image}`, `b|${image}`])
    .sort(() => Math.random() - 0.5);