import React from "react";
import CrossIcon from "./CrossIcon";
import searchIcon from "../assets/img/searchIcon.png";
import img from "../assets/img/ethimg.png";

const CoinsDropDown = ({
  loop,
  setShowModal,
  currentCurrency,
  setValue,
  setCurrentSymbol,
}) => {
  return (
    <div className="text-primary dropdown-container">
      <div className="cross-icon">
        <span onClick={() => setShowModal(false)}>
          <CrossIcon />
        </span>
      </div>
      <div className="dropdowns">
        <div className="search-bar">
          <div className="search-icon">
            <img src={searchIcon} alt="icon" />
          </div>
          <input type="search" placeholder="Search chains" />
        </div>
        <div className="coins-scrollbar">
          {loop.map((data, i) => (
            <div
              key={i}
              className="coin-dropdown"
              onClick={() => {
                console.log("Click", data);
                setCurrentSymbol(data.symbol);
                localStorage.setItem("currencyData", JSON.stringify(data));
                window.location.reload();
              }}
            >
              <div className="coin-name">
                <div className="coin-icon">
                  <img src={data?.img} alt="" />
                </div>
                <span className="fs-14">{data?.name}</span>
              </div>
              <div
                className={currentCurrency.name == data.name ? "" : "tick-icon"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                >
                  <path
                    d="M2 9.2L7.40909 14L19 2"
                    stroke="#58ADAB"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CoinsDropDown;
