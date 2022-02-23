import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { startAddToMenu, startDeleteToMenu } from "../../actions/menu";

import "./plato.css";

export const PLatoCard = ({ id, title, image, vegan }) => {
  const dispatch = useDispatch();
  const { menuList } = useSelector((state) => state.menu);
  const [inMenu, setInMenu] = useState(false);

  useEffect(() => {
    menuList.forEach( item => {
      if (item?.id === id) {
        setInMenu( true );
      }
    });
  }, [menuList, id]);

  const handleAdd = () => {
    dispatch(startAddToMenu( id ));
  };

  const handleDelete = () => {
    dispatch(startDeleteToMenu( id ));
    setInMenu(false)
  };

  return (
    <div className="col-10 mx-auto mx-sm-0 mt-3 animate__animated animate__fadeIn">
      <div className="card-sl">
        <div className="card-image img-fluid">
          <img src={image} alt="plato" />
        </div>

        <div className="card-heading">{title}</div>
        <p className="card-text">Vegan: { vegan ? 'Yes' : 'No'}</p>
        {
          inMenu
          ? <Link className="btn btn-outline-info m-2" to={`/plato/${id}`}>
              {""}
              Details
            </Link>
          : <button
              className="btn btn-outline-primary m-2"
              onClick={handleAdd}
            >
              Add to menu
            </button>
        }

        {/* Button Delete */}
        {inMenu && 
          <button className="btn btn-danger" onClick={handleDelete}>
            <RiDeleteBin6Line />
          </button>
        }
      </div>
    </div>
  );
};
