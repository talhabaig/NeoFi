import { useState } from "react";
import navLogo from "../assets/img/navLogo.png";

const Header = () => {
  const [openMenu, setIsOpenMenu] = useState(false);
  function handleClick() {
    setIsOpenMenu(!openMenu);
  }
  return (
    <header className={`header ${openMenu && "h-262"}`}>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            ) : (
              <path
                d="M1 13 13 1M1 1l12 12"
                stroke="#fff"
                stroke-width="2"
                strokeLinecap="round"
                stroke-linejoin="round"
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
export default Header;
