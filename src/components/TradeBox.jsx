import React, { useEffect, useState } from "react";
import ethImg from "../assets/img/ethimg.png";
import bitcoinImg from "../assets/img/bitcoinimg.jpg";
import maticImg from "../assets/img/maticimg.png";
import binanceImg from "../assets/img/binanceimg.jpg";
import xrpImg from "../assets/img/xrpimg.png";
import solanaImg from "../assets/img/solanaimg.png";

import CoinsDropDown from "./CoinsDropDown";

const TradeBox = () => {
  const [currentCurrency, setCurrentCurrency] = useState(null);
  var ws = null;
  const [currencyList, setCurrencyList] = useState([
    {
      img: ethImg,
      name: "Ethreum",
      link: "wss://stream.binance.com:9443/ws/ethusdt@trade",
    },
    {
      img: bitcoinImg,
      name: "Bitcoin",
      link: "wss://stream.binance.com:9443/ws/btcusdt@trade",
    },
    {
      img: maticImg,
      name: "Matic",
      link: "wss://stream.binance.com:9443/ws/maticusdt@trade",
    },
    {
      img: binanceImg,
      name: "Binance",
      link: "wss://stream.binance.com:9443/ws/bnbusdt@trade",
    },
    {
      img: xrpImg,
      name: "XRP",
      link: "wss://stream.binance.com:9443/ws/xrpusdt@trade",
    },
    {
      img: solanaImg,
      name: "Solana",
      link: "wss://stream.binance.com:9443/ws/solusdt@trade",
    },
  ]);
  const [value, setValue] = useState(currencyList[0]);

  const setUpCurrentCurrency = () => {
    if (ws != null) {
      setCurrentCurrency(null);
      ws?.close();
    }
    ws = new WebSocket(value.link);
    ws.onmessage = (event) => {
      var stockObject = JSON.parse(event.data);
      setCurrentCurrency({
        name: value.name,
        price: (parseFloat(stockObject.p) / 80).toFixed(2),
        image: value.img,
      });
      console.log(stockObject.p);
    };
  };

  useEffect(() => {
    setUpCurrentCurrency();
  }, [value]);

  return (
    <div className="trade-box">
      <CoinsDropDown />
      <div className="top-circle">
        <div>
          <img src={ethImg} alt="" />
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
          <div className="select-coin pointer">
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
          <span className="fs-22 text-gray font-600">0.00</span>
        </div>
      </div>
      <button className="btn-buy">Buy</button>
    </div>
  );
};
export default TradeBox;
