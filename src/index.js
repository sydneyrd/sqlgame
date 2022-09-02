import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { LuckyQuery } from "./LuckyQuery"
import "./index.css"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <LuckyQuery />
    </BrowserRouter>
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import LuckyQuery from './LuckyQuery';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <LuckyQuery />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

