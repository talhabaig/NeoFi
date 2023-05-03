import { useState } from "react";
import navLogo from "../assets/img/navLogo.png";
import PropTypes from "prop-types";
const Header = ({ showModal }) => {
  const [openMenu, setIsOpenMenu] = useState(false);
  function handleClick() {
    setIsOpenMenu(!openMenu);
  }
  return (
    <header
      className={`header ${openMenu && "h-262"} ${showModal && "overlay"}`}
    >
      <div className="flex justify-between items-center">
        <div>
          <img src={navLogo} alt="navLogo" />
        </div>
        <div onClick={handleClick} className="hidden">
          <svg
            width="18"
            height="14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {!openMenu ? (
              <path
                d="M1 1h16M1 7h16M1 13h16"
                stroke="#EAE8F4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            ) : (
              <path
                d="M1 13 13 1M1 1l12 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            )}
          </svg>
        </div>
      </div>
      <nav>
        <ul>
          <li className="active">Trade</li>
          <li>Earn</li>
          <li>Support</li>
          <li>About</li>
        </ul>
      </nav>
      <button>Connect wallet</button>
    </header>
  );
};
Header.propTypes = {
  showModal: PropTypes.bool,
};
export default Header;
