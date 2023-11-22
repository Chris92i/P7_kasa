import './style.scss'
import { useState } from 'react'

function Collapse ({contenu}){

    const [isClose, setIsClose] = useState(true);
    console.log( "test",contenu)
    return(
        <>
            <button onClick={() => setIsClose(!isClose)}>
                {isClose ? 'Montrer' : 'Cacher'}
            </button>
            {isClose && (
                <div className='contenuCollapse'>
                    {contenu?.description}
                    
                </div>
            )}

            
        </>
    )

}

export default Collapse