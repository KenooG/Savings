import React, {useEffect, useState} from 'react';
import CurrentDate from './CurrentDate';
import RandomQuote from "./RandomQuote.jsx";
import axios from "axios";



const Challanges = () => {

    const [value, SetValue] = useState(0);
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        const fetchValueFromServer = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const response = await axios.get(`http://localhost:8000/value/${userId}`);
                SetValue(response.data.value);
            } catch (error) {
                console.error('Błąd podczas pobierania wartości z serwera:', error);
            }
        };

        fetchValueFromServer();
    }, []);

 const HandleSubmit = async (e) => {
     e.preventDefault();

     console.log("Wprowadzona wartość:", inputValue);
     console.log("Aktualna wartość przed dodaniem:", value);
     const numericInputValue = parseFloat(inputValue);
     const numericValue = isNaN(value) ? 0 : value;
     const updatedValue = numericValue + numericInputValue;
     console.log("Zaktualizowana wartość:", updatedValue);
     SetValue(updatedValue);


     // Zaktualizuj wartość w localStorage
     localStorage.setItem('value', updatedValue.toString());

     // Pobierz userId z localStorage
     const userId = localStorage.getItem('userId');

     // Wyślij zaktualizowaną wartość na serwer
     try {
         await axios.post('http://localhost:8000/value', { userId, value: updatedValue });
         console.log('Wartość zaktualizowana pomyślnie');
     } catch (error) {
         console.error('Wystąpił błąd podczas aktualizacji wartości:', error);
     }

     // Opcjonalnie: wyczyść inputValue, aby użytkownik mógł wprowadzić nową wartość
     setInputValue('');
 };





        return (
            <>
                <div className="Challange_Des">
                    <p className="SavingGoal1">You are saving for : Dream Car</p>
                    <div className="SavingGoal2">
                        <p className="SG">Progress done : </p>
                        <p className="SG2">20%</p>
                    </div>
                </div>
                <div className="ChallangeDown">
                    <div className="DownLeft">
                        <div className="up">
                            <p><RandomQuote/></p>
                        </div>

                        <div className="down">
                            <div className="downleft">

                        <div className="date">
                            <CurrentDate />
                        </div>
                        <div className="container">
                            <form className="formulasz"  onSubmit={HandleSubmit}>
                            <label htmlFor="savings">Money saved today:</label>
                            <div className="labelcontainer">
                                <input  value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="number" id="savings" name="savings" placeholder="0.00$"/>
                                <span className="dollar-sign">$</span>
                            </div>
                            <button type="submit">Add</button>
                            </form>
                        </div>
                        </div>
                            <div className="downleftright">
                                <div className="totalmoney"><p>Money saved already: </p><p className="totalmoneytext">6000$</p></div>
                                <div className="toreach"><p>To reach your goal you need :</p> <p className="torachmoney">8000$</p></div>


                            </div>
                        </div>


                    </div>
                    <div className="DownRight">


                    </div>

                </div>


            </>


        )


    }




export default Challanges