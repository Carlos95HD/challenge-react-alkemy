import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getPlatoById } from '../../selectors/getPlatoById';

import './plato.css'

export const PlatoScreen = () => {

  const navigate = useNavigate();
  const {platoId} = useParams();

  const plato = useMemo(() => getPlatoById(platoId),[platoId]);

  if (!plato) {
    return <Navigate to="/" />
  }

  const { description, title, image } = plato

  const handleReturn = () => {
    navigate(-1);
  }

  return(
    <div>
      <h3 className="mt-5">{title}</h3>
      <hr />
      <div className='row'>
        <div className="card-image">
          <img src={image} alt="plato"/>
        </div>
        {/* detalles */}
        <div className="col">
          <h3>Información Adicional</h3>
          <p>{description}</p>
        </div>
      </div>


      <button 
        className="btn btn-outline-info mt-2"
        onClick={ handleReturn }
        >
        Volver
      </button>
    </div>
  )
};
