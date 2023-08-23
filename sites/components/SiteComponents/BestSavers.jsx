import axios from "axios";
import {useEffect, useState} from "react";


const BestSavers = () => {
    const [bestSavers, setBestSavers] = useState([]);

    useEffect(() => {
        const fetchBestSavers = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/best-savers`);
                setBestSavers(response.data);
            } catch (error) {
                console.error('Błąd podczas pobierania najlepszych oszczędzających:', error);
            }
        };

        fetchBestSavers();
    }, []);




    return(
        <>
       <div className="BestSavers">
           <div className="Head">
               <a href="/"><div className="logobox">
                   <div className="logo"></div>
                   <div className="logotextdiv"><p className="logotext">Smart Saver</p></div>

               </div>
               </a>
               <p className="Headtxt">Best Savers</p></div>
           
           <div className="BestContainer">
               {bestSavers.map((saver, index) => (
                   <div className="BestPpl" key={index}>
                       <div className="left">
                       <p className="SaverRank">{index + 1}</p> {}
                       </div> <div className="right">
                       <p className="SaverName">{saver.name}</p>
                       <p className="SavedMoney">Total money saved:</p>
                       <p className="SaverTotalValue">{saver.total_value}$</p>
                   </div>
                   </div>
               ))}
       </div>


       </div>



        </>


    )






}




export default BestSavers