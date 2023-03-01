import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Basket from "./components/Basket";

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/basket" element={<Basket />} />
            </Routes>
        </BrowserRouter>
    )
}