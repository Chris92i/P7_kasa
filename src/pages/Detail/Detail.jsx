// pour récupérer l'identifiant dans l'url il faut utiliser use params
import {useParams, Navigate } from "react-router-dom";
import { useEffect, useState} from "react"


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
        setData(cards);
    };
    useEffect(() => {
        getData();
    }, []);

    //if (!apartment) return <Navigate to="*" />;

    return (
        'hello Detail'
    )

}

export default Detail