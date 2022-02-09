import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../../actions/auth";
import { startLoading } from "../../actions/ui";
import { Spinner } from "../ui/Spinner";

import "./loginScreen.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui)

  const handleSubmit = ({ email, password }) => {
    dispatch( startLoading() );
    dispatch( startLogin( email, password ) );
  };

  return (
    <Formik
      initialValues={{
        email: process.env.REACT_APP_LOGINEMAIL,
        password: process.env.REACT_APP_LOGINPASSWORD,
      }}
      validate={(values) => {
        let errors = {};
        //Validaciones Email
        if (!values.email) {
          errors.email = "Por favor, ingresa un email electronico";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
        ) {
          errors.email =
            "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
        }
        //Validaciones Password
        if (!values.password) {
          errors.password = "Ingrese una contraseña valida";
        }

        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <div className="login-dark text-center">
          <Form>
            <div className="illustration">
              <i className="icon ion-ios-locked-outline"></i>
            </div>

            <div className="form-group">
              <Field
                className="form-control"
                autoComplete="off"
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="text-danger">{errors.email}</div>
                )}
              />
            </div>
            <div className="form-group">
              <Field
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <div className="text-danger">{errors.password}</div>
                )}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Enviar
              </button>
            </div>
          { loading && <Spinner /> }
          </Form>
        </div>
      )}
    </Formik>
  );
};
