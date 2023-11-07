import './Appart.scss'

function Appart({apt, title, cover}){

    console.log(apt)
    return (
        <div>
        <img src={apt.cover}/>
        <h3>{apt.title}</h3>
        </div>
    )

}

export default Appart