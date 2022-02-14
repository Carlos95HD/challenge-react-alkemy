import React from 'react';
import { PLatoCard } from './PlatoCard';
// import { MenuList } from './PlatoList';
import { useNavigate } from 'react-router-dom';

import './plato.css'

export const PlatoScreen = () => {

  const navigate = useNavigate();
  //TODO:peticion fetch hacia el plato con el id


  const handleReturn = () => {
    navigate(-1);
  }

  return(
    <div>
      <h3 className="mt-5">Plato Screen</h3>
      <hr />
      <div className='grid row'>
        <div className="card-image col-6">
          <img src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="plato"/>
        </div>
        {/* detalles */}
        <div className="col-6">
          <h3>Detalles</h3>
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
