import './style.scss'

function Host({ host }){

return(
    <>
    <p className='nomHost'>{ host?.name}</p>
    <div></div>
    </>
)

}

export default Host