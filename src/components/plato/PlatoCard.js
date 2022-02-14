import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { startAddToMenu, startDeleteToMenu } from "../../actions/menu";

import "./plato.css";

export const PLatoCard = ({ id, title, image }) => {
  const dispatch = useDispatch();
  const { menuList } = useSelector((state) => state.menu);
  const [inMenu, setInMenu] = useState(false);

  useEffect(() => {
    menuList.map( item => {
      if (item?.id === id) {
        setInMenu( true );
      }
    });
  }, [menuList]);

  const handleAdd = () => {
    dispatch(startAddToMenu({ id, title, image }));
  };

  const handleDelete = () => {
    dispatch(startDeleteToMenu({ id, title, image }));
    setInMenu(false)
  };

  return (
    <div className="col-md-3 mt-2">
      <div className="card-sl">
        <div className="card-image">
          <img src={image} alt="plato" />
        </div>

        <div className="card-heading">{title}</div>
        {
          inMenu 
          ? <Link className="btn btn-primary m-2" to={`/plato/${id}`}>
              {""}
              Detalle
            </Link>
          : <button
              className="btn btn-primary m-2"
              onClick={handleAdd}
              // disabled={inMenu}
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