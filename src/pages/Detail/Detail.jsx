// pour récupérer l'identifiant dans l'url il faut utiliser use params
import {useParams, Navigate } from "react-router-dom";
import { useCallback, useEffect, useState} from "react"
import Tag from "../../components/Tag/Tag";
import './style.scss'
import Appart from "../../components/Appart/Appart";
//import Appart from "../../components/Appart/Appart"




function Detail(){
    const { id } = useParams();
    console.log(id)
    const [data, setData] = useState({})
    const getData =useCallback( async () => {
        const response = await fetch("/logements.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const cards = await response.json();
        console.log(cards)
        const apartment = cards.find(apartment => apartment.id == id)
        setData(apartment);
        if (typeof apartment.id === "undefined") return <Navigate to="*" />
    }, [setData, id]);
    useEffect(() => {
        getData();
    }, [getData]);


    console.log('data is:' , data ); 
    return (
        <>
        hello Detail
        <h1>{data.title}</h1>

        <Tag/>
        </>

    )

}

export default Detail