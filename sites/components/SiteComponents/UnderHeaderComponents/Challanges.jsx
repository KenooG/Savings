import React, {useEffect, useState} from 'react';
import CurrentDate from './CurrentDate';
import RandomQuote from "./RandomQuote.jsx";
import axios from "axios";



const Challanges = () => {

    const [totalValue, setTotalValue] = useState(0);
    const [value, SetValue] = useState(0);
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        const fetchValueFromServer = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const response = await axios.get(`http://localhost:8000/value/${userId}`);
                SetValue(response.data.value);
                setTotalValue(response.data.total_value);
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
     console.log("numericInputValue:", numericInputValue);
     console.log("totalValue przed aktualizacją:", totalValue);
     const numericValue = isNaN(value) ? 0 : value;
     const updatedValue = numericValue + numericInputValue;
     console.log("Zaktualizowana wartość:", updatedValue);


     const updatedTotalValue = (isNaN(totalValue) ? 0 : totalValue) + numericInputValue;
     setTotalValue(updatedTotalValue);

     SetValue(updatedValue);



     // Zaktualizuj wartość w localStorage
     localStorage.setItem('value', updatedValue.toString());

     // Pobierz userId z localStorage
     const userId = localStorage.getItem('userId');
     try {
         await axios.post('http://localhost:8000/total_value', { userId: localStorage.getItem('userId'), total_value: updatedTotalValue });
         console.log('Całkowita wartość zaktualizowana pomyślnie');
     } catch (error) {
         console.error('Wystąpił błąd podczas aktualizacji całkowitej wartości:', error);
     }

     // Wyślij zaktualizowaną wartość na serwer
     try {
         await axios.post('http://localhost:8000/value', { userId, value: updatedValue });
         console.log('Wartość zaktualizowana pomyślnie');
     } catch (error) {
         console.error('Wystąpił błąd podczas aktualizacji wartości:', error);
     }
     if (percentageSaved >= 100) {
         SetValue(0);
         localStorage.setItem('value', '0'); // Resetuj wartość w localStorage

         // Opcjonalnie: możesz również zresetować wartość na serwerze
         try {
             await axios.post('http://localhost:8000/value', { userId, value: 0 });
             console.log('Wartość zresetowana pomyślnie');
         } catch (error) {
             console.error('Wystąpił błąd podczas resetowania wartości:', error);
         }
     }

     // Opcjonalnie: wyczyść inputValue, aby użytkownik mógł wprowadzić nową wartość
     setInputValue('');
 };



    const targetValue = 10000; // Wartość docelowa
    const remainingValue = targetValue - value;
    const percentageSaved = ((value / targetValue) * 100).toFixed(2);
    const minHeight = 10; // Minimalna wysokość paska postępu w procentach
    const maxHeight = 83;
    const calculatedHeight = minHeight + (maxHeight - minHeight) * (percentageSaved / 100);

    return (
            <>

                <div className="Challange_Des">
                    <p className="SavingGoal1">You are saving for : Dream Car</p>
                    <div className="SavingGoal2">
                        <p className="SG">Progress done : </p>
                        <p className="SG2">{percentageSaved}%</p>
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
                            <button type="submit" disabled={!inputValue}>Add</button>
                            </form>
                        </div>
                        </div>
                            <div className="downleftright">
                                <div className="totalmoney"><p>Money saved already: </p><p className="totalmoneytext">{value}$</p></div>
                                <div className="toreach"><p>To reach your goal you need :</p> <p className="torachmoney">{remainingValue}$</p></div>


                            </div>
                        </div>


                    </div>
                    <div className="DownRight">
                        <div className="progress-container">
                            <div className="progress-bar" style={{ height: `${calculatedHeight}%`}}></div>
                            <div className="car-image"></div> {/* Obraz samochodu */}
                        </div>
                        <div className="text">
                            <p className="Currenttext">Fill the entire car</p>
                        </div>
                    </div>

                </div>


            </>


        )


    }




export default Challanges