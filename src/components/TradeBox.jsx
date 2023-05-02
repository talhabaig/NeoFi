import React, { useEffect, useState, useRef } from "react";
import ethImg from "../assets/img/ethimg.png";
import bitcoinImg from "../assets/img/bitcoinimg.jpg";
import maticImg from "../assets/img/maticimg.png";
import binanceImg from "../assets/img/binanceimg.jpg";
import xrpImg from "../assets/img/xrpimg.png";
import solanaImg from "../assets/img/solanaimg.png";

import CoinsDropDown from "./CoinsDropDown";

const TradeBox = ({ showModal, setShowModal }) => {
  const wsRef = useRef();

  const [currentCurrency, setCurrentCurrency] = useState(null);
  const [currentSymbol, setCurrentSymbol] = useState("ethusdt");
  const [investment, SetInvestment] = useState(0);
  wsRef.current = null;
  const [currencyList, setCurrencyList] = useState([
    {
      img: ethImg,
      name: "Ethreum",
      link: "wss://stream.binance.com:9443/ws/ethusdt@trade",
      symbol: "ethusdt",
    },
    {
      img: bitcoinImg,
      name: "Bitcoin",
      link: "wss://stream.binance.com:9443/ws/btcusdt@trade",
      symbol: "btcusdt",
    },
    {
      img: maticImg,
      name: "Matic",
      link: "wss://stream.binance.com:9443/ws/maticusdt@trade",
      symbol: "maticusdt",
    },
    {
      img: binanceImg,
      name: "Binance",
      link: "wss://stream.binance.com:9443/ws/bnbusdt@trade",
      symbol: "bnbusdt",
    },
    {
      img: xrpImg,
      name: "XRP",
      link: "wss://stream.binance.com:9443/ws/xrpusdt@trade",
      symbol: "xrpusdt",
    },
    {
      img: solanaImg,
      name: "Solana",
      link: "wss://stream.binance.com:9443/ws/solusdt@trade",
      symbol: "solusdt",
    },
  ]);
  const [value, setValue] = useState(currencyList[0]);
  const [Opacity, setOpacity] = useState(false);
  const setUpCurrentCurrency = () => {
    wsRef.current = new WebSocket(value.link);
    console.log(wsRef.current);
    wsRef.current.onmessage = (event) => {
      var stockObject = JSON.parse(event.data);
      setCurrentCurrency({
        name: value.name,
        price: (parseFloat(stockObject.p) / 80).toFixed(2),
        image: value.img,
        symbol: stockObject.s.toLowerCase(),
      });
    };
  };

  useEffect(() => {
    if (localStorage.getItem("currencyData") != null) {
      setValue(JSON.parse(localStorage.getItem("currencyData")));
    }
    wsRef.current?.close();
    setUpCurrentCurrency();
  }, [value]);

  return (
    <>
      <div className={`trade-box ${showModal && "tradebox-overlay"}`}>
        {showModal && (
          <CoinsDropDown
            loop={currencyList}
            setShowModal={setShowModal}
            currentCurrency={currentCurrency}
            setValue={setValue}
            setCurrentSymbol={setCurrentSymbol}
          />
        )}
        <div className="top-circle">
          <div>
            <img src={ethImg} alt="img" />
          </div>
        </div>
        <div className="gap-1">
          <div className="flex justify-between items-center">
            <span className="text-primary fs-14">Current value</span>
            <span className="fs-24 text-secondary bold">
              ₹ {currentCurrency != null ? currentCurrency.price : 0}
            </span>
          </div>
          {currentCurrency != null ? (
            <div
              onClick={() => setShowModal(true)}
              className="select-coin pointer"
            >
              <div className="select-coin-icon">
                <div>
                  <img src={currentCurrency.image} alt="logo" />
                </div>
                <span>{currentCurrency.name}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="7"
                viewBox="0 0 14 7"
                fill="none"
              >
                <path d="M14 0H0L7 7L14 0Z" fill="#6E56F8" />
              </svg>
            </div>
          ) : (
            "Loading data..."
          )}
        </div>
        <div className="gap-1">
          <div className="fs-14 text-primary">Amount you want to invest</div>

          <div className="your-amount text-white">
            <span>
              <input
                className="fs-22 text-gray font-600"
                type="number"
                placeholder="0.00"
                value={investment}
                onChange={(e) => {
                  SetInvestment(e.target.value);
                }}
              />
            </span>
            <span>INR</span>
          </div>
        </div>
        <div className="gap-1">
          <div className="fs-14 text-primary">
            Estimate Number of ETH You will Get
          </div>

          <div className="estimated-amount text-white">
            <span className="fs-22 text-gray font-600">
              {currentCurrency
                ? (currentCurrency.price * investment).toFixed(2)
                : 0}
            </span>
          </div>
        </div>
        <button className="btn-buy">Buy</button>
      </div>
    </>
  );
};
export default TradeBox;
