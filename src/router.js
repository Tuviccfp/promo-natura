import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hidratantes from "./components/Products/Section1";
import Sabonetes from "./components/Products/Section2";
import Cosmeticos from "./components/Products/Section3";
import Perfumes from "./components/Products/Section4";
import App from "./App";

export default function Navigation() {
    return(
        <BrowserRouter>
            <Routes>               
                <Route exact path="/inicio" element={<App />}/>
                <Route exact path="/hidratantes" element={<Hidratantes />}/>
                <Route exact path="/sabonetes" element={<Sabonetes />}/>
                <Route exact path="/cosmeticos" element={<Cosmeticos />}/>
                <Route exact path="/perfumes" element={<Perfumes />}/>
            </Routes>
        </BrowserRouter>
    )
}

// #E5b6ec