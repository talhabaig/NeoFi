// import { useState } from 'react'
import { useState } from "react";
import Header from "./components/Header";
import TradeBox from "./components/TradeBox";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Header showModal={showModal} />
      <div className="main">
        <TradeBox showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default App;
