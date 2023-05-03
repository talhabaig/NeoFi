import CrossIcon from "./CrossIcon";
import searchIcon from "../assets/img/searchIcon.png";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";

const CoinsDropDown = ({
  loop,
  setShowModal,
  setValue,
  value,
  setCurrentCurrency,
}) => {
  const [searchVal, setSearchVal] = useState("");
  const optionsToUse = useMemo(
    () =>
      loop.filter((item) =>
        item.name.toLowerCase().includes(searchVal.toLowerCase())
      ),
    [searchVal, loop]
  );
  function closeModal() {
    setShowModal(false);
    setSearchVal("");
  }
  return (
    <div className="text-primary dropdown-container">
      <div className="cross-icon">
        <span onClick={() => closeModal(false)}>
          <CrossIcon />
        </span>
      </div>
      <div className="dropdowns">
        <div className="search-bar">
          <div className="search-icon">
            <img src={searchIcon} alt="icon" />
          </div>
          <input
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            type="search"
            placeholder="Search chains"
          />
        </div>
        <div className="coins-scrollbar">
          {optionsToUse.map((data, i) => (
            <div
              key={i}
              className="coin-dropdown"
              onClick={() => {
                setValue(data);
                closeModal(false);
                setCurrentCurrency(null);
              }}
            >
              <div className="coin-name">
                <div className="coin-icon">
                  <img src={data?.img} alt="" />
                </div>
                <span className="fs-14">{data?.name}</span>
              </div>
              <div className={value?.name == data.name ? "" : "tick-icon"}>
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
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
CoinsDropDown.propTypes = {
  loop: PropTypes.array,
  setShowModal: PropTypes.func,
  setValue: PropTypes.func,
  value: PropTypes.object,
  setCurrentCurrency: PropTypes.func,
};
export default CoinsDropDown;
