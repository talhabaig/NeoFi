// import { useState } from 'react'
import React from "react";
import Header from "./components/Header";
import TradeBox from "./components/TradeBox";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <div className="main">
        <TradeBox/>
      </div>
    </>
  );
}

export default App;
