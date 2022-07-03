import React from "react";

import "../style/advertisment.css";

export const Advertisment = () => {
  return (
    <div className="advertisment-container">
      <img src={require("../images/advertisment2.jpg")} alt="" />
      <div className="email-input">
        <input placeholder="Join us" />
        <div className="icon-advertisment">
        <i className="bi bi-send"></i>
        </div>
      </div>
    </div>
  );
};

