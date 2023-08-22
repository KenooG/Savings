import React from 'react';
import CurrentDate from './CurrentDate';




const Challanges = () => {


        return (
            <>
                <div className="Challange_Des">
                    <p className="SavingGoal1">You are saving for : Mercedes</p>
                    <div className="SavingGoal2">
                        <p className="SG">Progress done : </p>
                        <p className="SG2">20%</p>
                    </div>
                </div>
                <div className="ChallangeDown">
                    <div className="DownLeft">
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
                    <div className="DownRight">

                    </div>

                </div>


            </>


        )


    }




export default Challanges