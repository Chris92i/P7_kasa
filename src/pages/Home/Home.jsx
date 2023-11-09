import {useState, useEffect} from "react"
import Banner from "../../components/Banner/Banner"
import Appart from "../../components/Appart/Appart"
import { Link } from "react-router-dom";
import './style.scss'


function Home(){
    const [data, setData] = useState([])
    const getData = async () => {
        const response = await fetch("logements.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const cards = await response.json();
        setData(cards);
    };
    useEffect(() => {
        getData();
    }, []);



    return (
        <div className="home">
        <Banner />
        <article>
				{data.map((apartment) => {
					return (
						<Link key={apartment.id} to={`/appart/${apartment.id}`}>
							<Appart cover={apartment.cover} title={apartment.title} />
						</Link>
					);
				})}
		</article>
        </div>    
    )
} 
export default Home