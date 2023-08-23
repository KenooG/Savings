import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
    const quotes = [
        "\"If you would be wealthy, think of saving as well as getting.\" – Benjamin Franklin\n",
        "\"Money is a terrible master but an excellent servant.\" – P.T. Barnum",
        "\"The art is not in making money, but in keeping it.\" – Proverb",
        "\"He who buys what he does not need steals from himself.\" – Swedish Proverb",
        "\"A penny saved is a penny earned.\" – Benjamin Franklin",
        "\"Do not save what is left after spending, but spend what is left after saving.\" – Warren Buffett",
    ];

    const [randomQuote, setRandomQuote] = useState('');

    useEffect(() => {
        const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setRandomQuote(selectedQuote);
    }, []); // Pusty tabliczka zależności, aby uruchomić tylko raz, gdy komponent jest montowany

    return (
        <div className="quote-container">
            <p className="quote-text">Quote of the day : {randomQuote}</p>
        </div>
    );
};

export default RandomQuote;