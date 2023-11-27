import './style.scss'
import { useState } from 'react'

function Collapse ({content}){

    const { title, reply, equipments } = content
    const [isClose, setIsClose] = useState(false);
    console.log( "test",content)
    console.log( "tes2", title)
    return(
        <>
            <div className='collapse_container'>
                <button className='collapseStyle' onClick={() => setIsClose(!isClose)}>
                    {title}
                </button>
                {isClose && equipments && (
                    <div className="about-content">
                    {equipments.map((equipment, index) => {
                        return (
                            <ul className="list-equipment" key={index}>
                                <li className="list-equipment" >{equipment}</li>
                            </ul> 
                        )
                         
                    })}
                </div>
                )}
                {isClose && reply && (
                    <div className='contenuCollapse'>
                        {reply}   
                    </div>
                )}
            </div>
            
        </>
    )

}

export default Collapse