import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PLatoCard } from "../plato/PlatoCard";
import { MenuStats } from "./MenuStats";

export const Home = () => {
  const { menuList } = useSelector((state) => state.menu);

  return (
    <div className="m-0 text-center text-sm-left">
      <h3 className="mt-5 col col-sm-12">Menu</h3>
      <hr />
      {menuList.length === 0 ? (
        <div className="col-12 animate__animated animate__fadeIn">
          <p className="alert color-light-yellow text-muted" role="alert">
            There are no dishes added to the menu add one{" "}
            <NavLink to="/search"> here. </NavLink>
          </p>
        </div>
      ) : (
        <div>
          <div className="m-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4">
            {menuList.map((plato) => (
              <PLatoCard key={plato.id} {...plato} />
            ))}
          </div>
          {/* Promedios y acumulativos */}
          <div className="mt-4">
            <MenuStats />
          </div>
        </div>
      )}
    </div>
  );
};
