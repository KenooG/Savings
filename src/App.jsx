import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React, {useState} from "react";
import Home from "../sites/Home.jsx";
import Login from "../sites/Login.jsx";
import Register from "../sites/Register.jsx";
import {StoreProvider} from "easy-peasy";


function App() {
    const [currentForm, setCurrentForm] =useState("login")
    const toggleForm = (formName) => {

        setCurrentForm(formName)

    }


    return(
        <>



            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </BrowserRouter>



        </>
    )

}




export default App

