// pour récupérer l'identifiant dans l'url il faut utiliser use params
import {useParams, Navigate } from "react-router-dom";
import { useEffect, useState} from "react"
import Tag from "../../components/Tag/Tag";


function Detail(){
    const { id } = useParams();
    console.log(id)
    const [data, setData] = useState([])
    const getData = async () => {
        const response = await fetch("logements.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const cards = await response.json();
        const apartment = cards.find(apartment => apartment.id === id)
        setData(apartment);
    };
    useEffect(() => {
        getData();
    }, []);

    if (!data) return <Navigate to="*" />;

    return (
        <>
        hello Detail
        <h1>{data.title}</h1>
        <div>
            {data.description}
        </div>

        <Tag/>
        </>

    )

}

export default Detail