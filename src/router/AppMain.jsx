import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { NavbarSocialMedia } from "../components/NavbarSocialMedia";
import "../style/navbar-socialMedia.css";

export const AppMain = () => {
  return (
    <>
      <div className="socialMedia-div">
        <Navbar />
        <NavbarSocialMedia />
      </div>
      <Header />
      
    </>
  );
};
