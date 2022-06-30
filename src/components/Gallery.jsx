import React from "react";
import Slider from "react-slick";
import { settings } from "./Setting";

import "../style/gallery.css";

export const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-title">
        <h1>Gallery</h1>
      </div>
      <Slider {...settings}>
        <div className="slick-img">
          <img src={require("../images/gallery1.jpg")} alt="" />
        </div>
        <div className="slick-img">
          <img src={require("../images/gallery2.jpg")} alt="" />
        </div>
        <div className="slick-img">
          <img src={require("../images/gallery3.jpg")} alt="" />
        </div>
        <div className="slick-img">
          <img src={require("../images/gallery4.jpg")} alt="" />
        </div>
        <div className="slick-img">
          <img src={require("../images/gallery5.jpg")} alt="" />
        </div>
        <div className="slick-img">
          <img src={require("../images/gallery1.jpg")} alt="" />
        </div>
      </Slider>
    </div>
  );
};
