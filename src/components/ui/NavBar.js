import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { FiLogOut } from 'react-icons/fi'

export const NavBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Menu App
      </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              to="/home"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              to="/search"
            >
              Search
            </NavLink>
        </div>
        <div className="d-sm-flex justify-content-sm-start navbar-nav">
          <span className="nav-link text-info">{user}</span>
          <button className="col-2 col-sm-auto nav-link btn" onClick={handleLogout}>
              Logout <FiLogOut />
          </button>
        </div>
        
      </div>

    </nav>
  );
};
