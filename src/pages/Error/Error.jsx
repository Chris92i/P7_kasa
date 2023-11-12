import './index.scss'

function Error(){
    return (
        <>
            <p className='erreur'>404</p>
            <p className='erreur_oups'>Oups! La page que vous demandez n'existe pas.</p>
            <p className='erreur_oups_back'>Retourner sur la page d’accueil</p>
        </>
    )

}

export default Error