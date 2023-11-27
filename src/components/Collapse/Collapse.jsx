import './style.scss'
import { useState } from 'react'

function Collapse ({content}){
    
    //destructuration de l'objet content pour récupérer les propriétés title, reply, equipements
    const { title, reply, equipments } = content

    // etat initiale à false
    const [isClose, setIsClose] = useState(false);

    console.log( "test",content)
    console.log( "tes2", title)
    
    return(
        <>
            <div className='collapse_container'>
                {/* Toggle appel de la fonctione avec l'inverse de la valeur actuelle */}
                <button className='collapseStyle' onClick={() => setIsClose(!isClose)}>
                    {title}
                </button>
                {/* Si isClose est vrai et equipments existe, alors une liste d’équipements est rendue. */}
                {isClose && equipments && (
                    <div className="about-content">
                    {/* Chaque équipement est rendu comme un élément de liste.*/}
                    {equipments.map((equipment, index) => {
                        return (
                            <ul className="list-equipment" key={index}>
                                <li className="list-equipment" >{equipment}</li>
                            </ul> 
                        )
                         
                    })}
                </div>
                )}
                {/* Si isClose est vrai et reply existe, alors le contenu de reply est rendu. */}
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