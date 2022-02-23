import React, { useEffect } from "react";
import { FcClock, FcLike, FcPaid } from "react-icons/fc";
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
    <div>
      <div className="card-header">Averages</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
        <FcLike /> Total health score: {totalHealthScore}
        </li>
        <li className="list-group-item">
        <FcClock /> Total preparation time: {readyInMinutesAvg} min.
        </li>
        <li className="list-group-item">
        <FcPaid/> Total price: <span>$</span> {totalPriceDollar}
        </li>
      </ul>
    </div>
  );
};
