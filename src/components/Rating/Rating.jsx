import './style.scss'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'

function Rating({ note }){

    const tabNote = []
    const noteValeur = parseInt(note)

    for (let i = 1; i < 6; i++ ){
        const source = (i<= noteValeur? starActive : starInactive)
        const alt = (i<= noteValeur? 'etoile active' : 'etoile inactive')
            tabNote.push(
                <img key={'note-${i}'} src={source} alt={alt} />
            )
    }

    return(
        <>
            <p>{tabNote}</p>
        </>
    )

}

export default Rating