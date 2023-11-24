import './style.scss'
import { useLocation } from 'react-router-dom'
//import '../../assets/homeBanner.png'
//import '../../assets/montagne.png'


function Banner(){

    const location = useLocation()
    //const montagne = '../../assets/montagne.png'
    //const falaise = '../../assets/falaise.png'
    let bannerImage
    let bannerText

    switch(location.pathname){
        case '/Home':
            bannerImage = '/src/assets/homeBanner.png'
            bannerText = 'Chez vous, partout et ailleurs'
        break;
        
        case '/About':
            bannerImage = '/src/assets/montagne.png'
            bannerText = ''
        break;
        default:
            bannerImage = '/src/assets/homeBanner.png'
            bannerText = 'Chez vous, partout et ailleurs' 

    }
console.log ('bannerimage',bannerImage)

return(
    <div className="banner_container" style={{ backgroundImage: `url(${bannerImage})`}}>
        <div className="banner_container_text">
            <div className="banner_text">{bannerText}</div>
        </div>
    </div>
)

}

export default Banner