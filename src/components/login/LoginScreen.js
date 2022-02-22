import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../../actions/auth";
import { startLoading } from "../../actions/ui";
import { Spinner } from "../ui/Spinner";

import "./loginScreen.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const handleSubmit = ({ email, password }) => {
    dispatch(startLoading());
    dispatch(startLogin(email, password));
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
        <div className="container-fluid min-vh-100 row mx-auto">
          <div className="login-section-wrapper m-auto">
            <div className="login-wrapper animate__animated animate__fadeIn">
              <h1 className="login-title">Log in</h1>

              <Form>
                <div className="form-group">
                  <label>Email</label>
                  <Field
                    autoComplete="off"
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="email@example.com"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  />
                </div>
                <div className="form-group mb-4">
                  <label>Password</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="enter your passsword"
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="text-danger">{errors.password}</div>
                    )}
                  />
                </div>
                <button
                  id="login"
                  className={`btn btn-block login-btn ${
                    loading ? "not-allowed" : ""
                  }`}
                  type="submit"
                  disabled={loading}
                >
                  Login
                </button>
              </Form>
              <div className="text-center">{loading && <Spinner />}</div>
            </div>
          </div>
        </div>
      )}
    </Formik>

  );
};
