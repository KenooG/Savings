import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../sites/Dashboard.jsx";
import Home from "../sites/Home.jsx";


function App() {


    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>



        </>
    )

}




export default App

