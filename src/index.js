import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { LuckyQuery } from "./LuckyQuery"
import "./index.css"
import "nes.css/css/nes.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';



const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
    <BrowserRouter>
        <LuckyQuery />
    </BrowserRouter>
)
