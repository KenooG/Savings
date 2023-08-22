import React from 'react';
import CurrentDate from './CurrentDate';
import RandomQuote from "./RandomQuote.jsx";



const Challanges = () => {




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
                            <label htmlFor="savings">Money saved today:</label>
                            <div className="labelcontainer">
                                <input type="number" id="savings" name="savings" placeholder="0.00$"/>
                                <span className="dollar-sign">$</span>
                            </div>
                            <button type="submit">Add</button>
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