import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSyncLocalStorage } from "../../actions/menu";
import { convertCentToDollar } from "../../helpers/convertCentToDollar";

export const MenuStats = () => {
  const dispatch = useDispatch();
  const { menuAverage } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(startSyncLocalStorage());
  }, [dispatch]);

  const { totalHealthScore, totalPrice, readyInMinutesAvg } = menuAverage;

  const totalPriceDollar = convertCentToDollar(totalPrice);

  return (
    <div className="card">
      <div className="card-header">Averages</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Puntaje de salud: {totalHealthScore}
        </li>
        <li className="list-group-item">
          Tiempo De preparación total: {readyInMinutesAvg} min.
        </li>
        <li className="list-group-item">
          Precio Total: <span>$</span> {totalPriceDollar}
        </li>
      </ul>
    </div>
  );
};
