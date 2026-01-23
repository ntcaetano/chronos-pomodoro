import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css'
import './styles/theme.css'

export function App() {

    return (
        <>
            <Heading>
                Olá Mundo 1
                <button>
                    <TimerIcon />
                </button>
            </Heading>
    
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio porro et deserunt voluptates sint repellendus error expedita aperiam explicabo! Magni fugit quas, tempore fuga magnam voluptas maxime eum eius recusandae.
            </p>
        </>
    );
}
