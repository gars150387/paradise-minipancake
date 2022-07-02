import { Link } from "react-router-dom";


import "../style/header.css";
import "../style/button.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-img"></div>
      <img
        className="header-img"
        src={require("../images/advertisment.jpg")}
        alt="head-img"
      />
      <Link to="/register">
      <button className="btn shopping">Shop</button>
      </Link>
    </div>
  );
};
