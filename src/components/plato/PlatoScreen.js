import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { convertCentToDollar } from "../../helpers/convertCentToDollar";
import { getPlatoById } from "../../selectors/getPlatoById";
import { FcLike, FcClock, FcPaid, FcPlus, FcInfo} from "react-icons/fc";

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
          <img src={image} alt={title} className='animate__animated animate__fadeIn'/>
        </div>

        <div>
          {/* <h3>Additional Information</h3> */}
          <div
            className="bg-light mt-2 rounded"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
        <ul className="list-group list-group-flush animate__animated animate__fadeIn mt-2">
          <li className="list-group-item"><FcLike /> Healt Score: {healthScore}</li>
          <li className="list-group-item"><FcClock /> Ready in: {readyInMinutes} min.</li>
          <li className="list-group-item"><FcInfo/> Servings: {servings}</li>
          <li className="list-group-item"><FcPlus/> Vegan: {vegan ? "Yes" : "No"}</li>
          <li className="list-group-item font-weight-bold text-info">
          <FcPaid/> Price per Serving: <span>$</span>
            {priceDollar}
          </li>
        </ul>
      </div>

      <button className="btn custom-btn-warning mt-2" onClick={handleReturn}>
        Return
      </button>
    </div>
  );
};
