import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPlato } from "../../actions/plato";
import { PLatoCard } from "../plato/PlatoCard";

export const SearchScreen = () => {

  const { platoList } = useSelector( state => state.plato )
  const dispatch = useDispatch();

  const handleSubmit = ({ search }) => {
    dispatch(searchPlato( search ));
  };

  return (
    <div className='grid'>
      <h3 className="mt-5">Buscador de platos</h3>
      <hr />
      <Formik
        initialValues={{search : ''}}
        validate={(values) => {
          let errors = {};
          if (!values.search) {
            errors.search = "Ingresa un nombre";
          } else if ( values.search.length < 2) {
            errors.search = "Ingrese mas de 2 caracteres";
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="my-2 my-lg-0">
            <div className="form-inline">
              <Field
                className="form-control mr-sm-2"
                autoComplete='off'
                name="search"
                type="text"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0 mr-2"
                type='submit'
              >
                Buscar
              </button>
            </div>

            <div>
              <ErrorMessage
                  name="search"
                  component={() => (
                    <span className="text-danger position-absolute">{errors.search}</span>
                  )}
              />
            </div>
          </Form>
        )}
      </Formik>

      {/* Mostrar Resutado */}
      <div className='row mt-4'>
        { platoList.map( plato => (
          <PLatoCard
            key={plato.id} {...plato}
          />
        ))
        }
      </div>
    </div>
  );
};
