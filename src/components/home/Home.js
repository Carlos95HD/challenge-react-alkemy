import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PLatoCard } from "../plato/PlatoCard";
import { MenuStats } from "./MenuStats";

export const Home = () => {
  // const dispatch = useDispatch();
  const { menuList } = useSelector((state) => state.menu);

  return (
    <div>
      <h3 className="mt-5">Menú</h3>
      <hr />
      {menuList.length === 0 ? (
        <div>
          <div className="alert alert-info" role="alert">
            No hay platos agregado al menú agregue uno{" "}
            <NavLink to="/search"> aquí </NavLink>
          </div>
        </div>
      ) : (
        <div>
          <div className="row mt-4">
            {menuList.map((plato) => (
              <PLatoCard key={plato.id} {...plato} />
            ))}
          </div>
          {/* Promedios y acumulativos */}
          <div className="w-25 mt-4">
            <MenuStats />
          </div>
        </div>
      )}
    </div>
  );
};
