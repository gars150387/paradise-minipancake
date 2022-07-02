import { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

import "../style/register.css";
import "../style/button.css";

export const Register = () => {
  const [validated, setValidated] = useState(false);
  const [inputChange] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    inputChange();
  };

  const handleWhatsappLink = (e) => {
    e.preventDefault();
    window.open("https://wa.me/p/4855065104588916/", "_blank");
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
    <div className="register-container">
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
      <Form
        className="register-form"
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3 register-group">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="group-container"
          >
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue={inputChange}
              id="input-firstName"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="group-container"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue={inputChange}
              id="input-lastName"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomUsername"
            className="group-container"
          >
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
                id="input-email"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationPassword"
            className="group-container"
          >
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
                id="input-password"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationPassword"
            className="group-container"
          >
            <Form.Label>Confirm password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
                id="input-password"
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3 group-container checkbox">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            className="form-check-text"
          />
        </Form.Group>
        <Link to="/shoppingCart">
          <Button type="submit">Submit</Button>
        </Link>
        <Link to="/login">
          <div className="link-login">
            If you are have an account, please click this link to login
          </div>
        </Link>
      </Form>
    </div>
  );
};
