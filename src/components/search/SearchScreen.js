import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch} from "react-icons/ai";
import { searchPlato } from "../../actions/plato";
import { PLatoCard } from "../plato/PlatoCard";
import { SearchLoading } from "./SearchLoading";

export const SearchScreen = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const { platoList } = useSelector((state) => state.plato);
  const { loading } = useSelector((state) => state.ui);

  const filteredRecipes = () => {
    return platoList.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    if (platoList.length > currentPage + 8) {
      setCurrentPage(currentPage + 8);
    }
  };

  const prevPage = () => {
    currentPage > 0 && setCurrentPage(currentPage - 8);
  };

  const handleSubmit = ({ search }) => {
    setCurrentPage(0);
    dispatch(searchPlato(search));
  };

  return (
    <div className="grid">
      <h3 className="mt-5">Dish finder</h3>
      <hr />
      <Formik
        initialValues={{ search: "" }}
        validate={(values) => {
          let errors = {};
          if (!values.search) {
            errors.search = "Enter a name";
          } else if (values.search.length < 2) {
            errors.search = "Enter more than 2 characters";
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="my-2 my-lg-0 animate__animated animate__fadeIn">
            <div className="form-inline">
              <Field
                className="form-control mr-sm-2 outline-warning"
                autoComplete="off"
                name="search"
                type="text"
              />
              <button
                className="btn custom-btn-warning p-2 my-2 my-sm-0 mr-2"
                type="submit"
              >
                <AiOutlineSearch />
              </button>
            </div>

            <div>
              <ErrorMessage
                name="search"
                component={() => (
                  <span className="text-danger position-absolute">
                    {errors.search}
                  </span>
                )}
              />
            </div>
          </Form>
        )}
      </Formik>
      {/* Loading - Results */}
      {loading 
      ? <SearchLoading />
      : <div className="m-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4 mt-4 text-center text-sm-left">
          {filteredRecipes().map((plato) => (
            <PLatoCard key={plato.id} {...plato} />
          ))}
        </div>
      }

      {/* Btn Next - Prev */}
      {platoList.length > 0 && (
        <div className="my-3">
          <button className="btn custom-btn-warning" onClick={prevPage}>
            <AiOutlineLeft />
            Previous
          </button>
          &nbsp;
          <button className="btn custom-btn-warning" onClick={nextPage}>
            Next
            <AiOutlineRight />
          </button>
        </div>
      )}
    </div>
  );
};
