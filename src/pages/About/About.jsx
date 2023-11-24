import './index.scss'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'




function About(){
    
    const location = useLocation()
    console.log('page:',location)

    return (
        <>
            <Banner page={location}/>
        </>
    )

}

export default About