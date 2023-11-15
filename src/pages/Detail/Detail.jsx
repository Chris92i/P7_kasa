// pour récupérer l'identifiant dans l'url il faut utiliser use params
import {useParams, Navigate } from "react-router-dom";
import { useEffect, useState} from "react"
import Tag from "../../components/Tag/Tag";
import './style.scss'
import Carousel from "../../components/Caroussel/Carousel";
import Error from "../Error/Error";




function Detail(){
    const { id } = useParams();
    console.log(id)
    const [data, setData] = useState([0])
    const getData = async () => {
        const response = await fetch("../logements.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const cards = await response.json();
        console.log(cards)
        const apartment = cards.find(apartment => apartment.id == id)
        setData(apartment);
      
    }
    useEffect(() => {
        getData();
    }, []);

    if (!data) return <Error/>
    console.log(data ); 

    return (
        <>
            <Carousel/>
            <div>
                <div className="nomLocalisation">
                    <p>{data?.title}</p>
                    <Carousel img={data?.pictures}/>
                    
                </div>
                <div>
                {data?.tags?.map((tag, index) => {
                        return <Tag value={tag} key = {index}/>
                    })}
                </div>

            </div>
        </>

    )

}

export default Detail