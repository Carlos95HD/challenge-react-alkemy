import React from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

import "./loginScreen.css";

const initialState = {
  email:process.env.REACT_APP_LOGINEMAIL,
  password:process.env.REACT_APP_LOGINPASSWORD
}

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm(initialState);
  const { email , password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( startLogin( email, password) )
  }

  return (
    <div className="login-dark">
      <form onSubmit={ handleSubmit }>
        <div className="illustration">
          <i className="icon ion-ios-locked-outline"></i>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            autoComplete="off"
            type="email"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ handleInputChange }
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={ password }
            onChange={ handleInputChange }
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
