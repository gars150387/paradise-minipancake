import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

import "../style/navbar-socialMedia.css";

export const NavbarSocialMedia = () => {
  const handleWhatsappLink = (e) => {
    e.preventDefault();
    window.open("https://wa.me/p/4855065104588916/17865635900", "_blank");
  };

  const handleInstagramLink = (e) => {
    e.preventDefault();
    window.open("https://www.instagram.com/paradiseminnipancakes/", "_blank");
  };

  const handleTiktokLink = (e) => {
    e.preventDefault();
    window.open("https://www.tiktok.com/@paradiseminnipancakes", "_blank");
  };

  const handleFacebookLink = (e) => {
    e.preventDefault();
    window.open("https://www.facebook.com/paradiseminnipancakes", "_blank");
  };
  return (
    <nav className="nav-socialMedia">
      <div className="icon-socialMedia">
        <span>
          <FaFacebookF onClick={handleFacebookLink} className="inner-icon" />
        </span>
      </div>
      <div className="icon-socialMedia">
        <span>
          <FaInstagram onClick={handleInstagramLink} className="inner-icon" />
        </span>
      </div>
      <div className="icon-socialMedia">
        <span>
          <FaTiktok onClick={handleTiktokLink} className="inner-icon" />
        </span>
      </div>
      <div className="icon-socialMedia">
        <span>
          <FaWhatsapp onClick={handleWhatsappLink} className="inner-icon" />
        </span>
      </div>
    </nav>
  );
};
