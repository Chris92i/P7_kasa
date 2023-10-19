import React, {useState, useEffect} from "react"
import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Appart from "../../components/Appart/Appart"


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
        <>
        <Header/>
        <Banner />
        <div className="main">
        {data && data.map(apt => <Appart key= {apt.id} apt={apt}/>)}
        </div>
        <Footer/>      
        </>
    )
} 
export default Home