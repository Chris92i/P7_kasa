import './index.scss'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'




function About(){
    
    const location = useLocation()
    console.log('page:',location)

    return (
        <>
            <div className='About'>
            <Banner page={location}/>
            </div>
            <Collapse />
        </>
    )

}

export default About