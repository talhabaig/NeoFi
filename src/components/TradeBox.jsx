import React from "react";
import ethImg from "../assets/img/ethimg.png";
import CoinsDropDown from "./CoinsDropDown";
const TradeBox = () => {
  return (
    <div className="trade-box">
        <CoinsDropDown/>
      <div className="top-circle">
        <div>
          <img src={ethImg} alt="" />
        </div>
      </div>
      <div className="gap-1">
        <div className="flex justify-between items-center">
          <span className="text-primary fs-14">Current value</span>
          <span className="fs-24 text-secondary bold">₹ 24882</span>
        </div>

        <div className="select-coin pointer">
          <div className="select-coin-icon">
            <div>
              <img src={ethImg} alt="logo" />
            </div>
            <span>Ethereum</span>
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
      </div>
      <div className="gap-1">
        <div className="fs-14 text-primary">Amount you want to invest</div>

        <div className="your-amount text-white">
          <span>
            <input className="fs-22 text-gray font-600" type="number" placeholder="0.00" />
          </span>
          <span>INR</span>
        </div>
      </div>
      <div className="gap-1">
        <div className="fs-14 text-primary">Estimate Number of ETH You will Get</div>

        <div className="estimated-amount text-white">
          <span className="fs-22 text-gray font-600">0.00</span>
        </div>
      </div>
      <button className="btn-buy">Buy</button>
    </div>
  );
};
export default TradeBox;
