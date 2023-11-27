import './index.scss'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import aboutData from '../../../public/about.json'




function About(){
    
    const location = useLocation()
    console.log('page:',location)

    return (
        <>
            <div className='About'>
                <Banner page={location}/>
                <div className='collapse_container'>
                    {
                      aboutData.map(({ title, reply }, index) => (
                        <Collapse key={ index } content={{
                            title: title,
                            reply: reply,
                        }
                         }/>
                      )
                      )  
                    }
                </div>
            </div>
        </>
    )

}

export default About