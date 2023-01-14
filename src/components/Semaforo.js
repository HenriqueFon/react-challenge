import './Semaforo.css';
import { useState } from 'react';

const Semaforo = () => {

    const [color, setColor] = useState('');
    console.log(color)
    return (
        <div class="body-semaoforo">
            <span className = {color == 'red' ? ('dot-red') : ('dot-red-desligado')} onClick={() => setColor('red')}></span>
            <span className = {color == 'yellow' ? ('dot-yellow') : ('dot-yellow-desligado')} onClick={() => setColor('yellow')}></span>
            <span className = {color == 'green' ? ('dot-green') : ('dot-green-desligado')} onClick={() => setColor('green')}></span>
        </div>
    )
}

export default Semaforo;