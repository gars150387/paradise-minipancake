
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
        <button className="btn shopping">Shop</button>
    </div>
  );
};
