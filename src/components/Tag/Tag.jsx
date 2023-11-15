import './style.scss'


function Tag({ value }){
    console.log(value)
    return(
        <div className='tag_container'>
            <div className='tag_text'>{ value }</div>
        </div>
    )

}

export default Tag