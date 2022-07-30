import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

import "../style/login.css";

export const Login = () => {

  const handleWhatsappLink = (e) => {
    e.preventDefault();
    window.open(
      "https://wa.me/p/4855065104588916/17865635900",
      "_blank"
    );
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
    window.open("hhttps://www.facebook.com/paradiseminnipancakes", "_blank");
  };


  return (
    <div className="login-container">
      <div className="register-logo">
        <nav className="nav-socialMedia">
          <div className="icon-socialMedia">
            <span>
              <FaFacebookF
                onClick={handleFacebookLink}
                className="inner-icon"
              />
            </span>
          </div>
          <div className="icon-socialMedia">
            <span>
              <FaInstagram
                onClick={handleInstagramLink}
                className="inner-icon"
              />
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
      </div>
      <Form className="login-form">
        <Form.Group
          className="mb-3 group-container-login"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="input-firstName"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 group-container-login"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="input-password"
          />
        </Form.Group>
        <Link to='/shoppingCart'>
        
        <Button className="btn login" variant="primary" type="submit">
          Login
        </Button>
        </Link>
        <Link to='/shoppingCart'>
        
        <hr />
        
        <Button className="btn login" variant="primary" type="submit">
          Google SignIn
        </Button>
        </Link>
        <Link to='/shoppingCart'>
        
        <Button className="btn login" variant="primary" type="submit">
          Facebook SignIn
        </Button>
        </Link>
        
        <Link to="/register">
          <div className="link-register">
            If you don't have an account, please click here to register
          </div>
        </Link>
      </Form>
    </div>
  );
};
