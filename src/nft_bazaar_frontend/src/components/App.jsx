import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item.jsx";
import Minter from "./Minter.jsx";

function App() {
   const NFTID = "bkyz2-fmaaa-aaaaa-qaaaq-cai";

  return (
    <div className="App">
      <Header />
      <Minter />
      <Item id={NFTID}/>
      <Footer />
    </div>
  );
}


export default App;
