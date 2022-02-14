import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { PLatoCard } from "./PlatoCard";
import { listarMenu } from "../../actions/menu";

import "./plato.css";
import { SearchScreen } from "../search/SearchScreen";

export const MenuList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.menu);

  const handleClick = () => {
    dispatch(listarMenu());
  };

  return (
    <div className="container mt-5">

      <SearchScreen />

      <div className="row">
        { !!list && list.map((menu) => (
          <PLatoCard key={menu.id} {...menu} />
        ))}
      </div>

      {/* <button onClick={handleClick} className="btn btn-primary mt-5">
        Listar
      </button> */}
    </div>
  );
};
