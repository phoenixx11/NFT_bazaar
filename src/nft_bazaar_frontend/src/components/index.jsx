import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Principal } from "@dfinity/principal";


const CURRENT_USER_ID = Principal.fromText("2vxsx-fae");
export default CURRENT_USER_ID;

const init = async () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};


init();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

