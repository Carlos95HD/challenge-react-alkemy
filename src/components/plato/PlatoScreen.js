import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { convertCentToDollar } from "../../helpers/convertCentToDollar";
import { getPlatoById } from "../../selectors/getPlatoById";

import "./plato.css";

export const PlatoScreen = () => {
  const navigate = useNavigate();
  const { platoId } = useParams();

  const plato = useMemo(() => getPlatoById(platoId), [platoId]);

  if (!plato) {
    return <Navigate to="/" />;
  }

  const {
    title,
    image,
    healthScore,
    readyInMinutes,
    servings,
    pricePerServing,
    vegan,
    summary,
  } = plato;

  const priceDollar = convertCentToDollar(pricePerServing);

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3 className="mt-5">{title}</h3>
      <hr />
      <div>
        <div>
          <img src={image} alt="plato" />
        </div>

        <div>
          {/* <h3>Additional Information</h3> */}
          <div
            className="bg-light mt-2 p-2 rounded"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
        <ul className="list-group">
          <li className="list-group-item">Healt Score: {healthScore}</li>
          <li className="list-group-item">Ready in: {readyInMinutes} min.</li>
          <li className="list-group-item">Servings: {servings}</li>
          <li className="list-group-item">Vegan: {vegan ? "Yes" : "No"}</li>
          <li className="list-group-item list-group-item-info">
            Price per Serving: <span>$</span>
            {priceDollar}
          </li>
        </ul>
      </div>

      <button className="btn btn-outline-primary mt-2" onClick={handleReturn}>
        Volver
      </button>
    </div>
  );
};
