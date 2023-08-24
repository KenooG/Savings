import React, { useState, useEffect } from 'react';
import axios from "axios";

const Target = ({ percentageSaved, targetValue, setTargetValue }) => {

    const [isTargetSet, setIsTargetSet] = useState(false);


    useEffect(() => {
        const fetchTargetValue = async () => {
            const userId = localStorage.getItem('userId');
            try {
                const response = await axios.get(`http://localhost:8000/target/${userId}`);
                const numericTargetValue = parseFloat(response.data.target_value); // Konwersja na liczbę
                setTargetValue(numericTargetValue); // Aktualizacja targetValue w komponencie Challanges
            } catch (error) {
                console.error('Błąd podczas pobierania wartości docelowej z serwera:', error);
            }
        };

        fetchTargetValue();
    }, [setTargetValue]);




    const handleSetTarget = async () => {
        const userId = localStorage.getItem('userId');
        const numericTargetValue = parseFloat(targetValue);
        try {
            await axios.post('http://localhost:8000/target', { userId, target_value: numericTargetValue }); // Użycie numericTargetValue zamiast targetValue
            console.log('Wartość docelowa zaktualizowana pomyślnie');

            setIsTargetSet(true);

        } catch (error) {
            console.error('Wystąpił błąd podczas aktualizacji wartości docelowej:', error);
        }
    };


    useEffect(() => {
        if (percentageSaved >= 100) {
            setTargetValue(0);
            setIsTargetSet(false);
        }
    }, [percentageSaved]);

    return (
        <div className="target-container">

            {!isTargetSet && (
                <>
                <div className="Target">
                    <label htmlFor="targetValue">Set your saving goal:</label>
                    <div className="labelcontainer">
                        <input type="number" id="targetValue" name="targetValue" value={targetValue} onChange={(e) => setTargetValue(e.target.value)} />
                        <span className="dollar-sign">$</span>
                    </div>
                    <button onClick={handleSetTarget} disabled={!targetValue}>Set</button>
                </div>
                </>
            )}

        </div>
    );

}

export default Target;