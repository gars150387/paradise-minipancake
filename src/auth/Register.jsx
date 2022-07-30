import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from 'react-redux'


import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

import "../style/register.css";
import "../style/button.css";
import { startCreatingUserWithEmailPassword } from "../auth/auth/Thunk";
import { useMemo } from "react";


const formData = {
  email: "",
  password: "",
  displayName: "",
};


export const Register = () => {

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

  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  
  const {
    displayName,
    email,
    password,
    city,
    street,
    zipCode,
    phone,
    onInputChange,
    formState,
  } = useForm(formData);


  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startCreatingUserWithEmailPassword(formState));
    console.log({ email, password, displayName })
  };


  return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Ingreso</h3>
                        <form>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login" 
                                />
                            </div>
                        </form>
                    </div>
    
                    <div className="col-md-6 login-form-2">
                        <h3>Registro</h3>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña" 
                                />
                            </div>
    
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña" 
                                />
                            </div>
    
                            <div className="form-group">
                                <input 
                                    type="submit" 
                                    className="btnSubmit" 
                                    value="Crear cuenta" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

