// pour récupérer l'identifiant dans l'url il faut utiliser use params
import {useParams, Navigate } from "react-router-dom";
import { useEffect, useState} from "react"
import Tag from "../../components/Tag/Tag";
import './style.scss'
import Carousel from "../../components/Caroussel/Carousel";
import Error from "../Error/Error";
import Title from "../../components/Title/Title";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";




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
            <div className="sousCarousel_container">
                <div>
                <div className="nomLocalisation">
                    <Title titre={ data?.title }/>
                    <p className="localisation_container">{data?.location}</p>
                </div>

                <div className="tags_container">
                {data?.tags?.map((tag, index) => {
                    return <Tag value={ tag } key = {index}/>
                })}
                </div>
                </div>

                <div>
                <div className="host_container">
                    <Host host={ data?.host}/>
                </div>
                <div>
                    <Rating note={ data?.rating }/>
                </div>
                </div>

            </div>
        </>

    )

}

export default Detail