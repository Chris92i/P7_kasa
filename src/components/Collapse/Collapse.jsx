import './style.scss'
import { useState } from 'react'

function Collapse ({intitule, contenu}){

    const [isClose, setIsClose] = useState(true);
    console.log( "test",contenu)
    console.log( "tes2", intitule)
    return(
        <>
            <div className='collapse_container'>
                <button className='collapseStyle' onClick={() => setIsClose(!isClose)}>
                    {intitule}
                </button>
                {isClose && (
                    <div className='contenuCollapse'>
                        {contenu}   
                    </div>
                )}
            </div>
            
        </>
    )

}

export default Collapse