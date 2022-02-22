import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { FiLogOut } from "react-icons/fi";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        Challenge
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <div className="navbar-nav mr-2">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : "")
            }
            to="/home"
          >
            Menu
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
        <div className="dropdown text-right ">
          <button
            className="dropdown-toggle btn custom-btn-warning"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            User
          </button>
          <ul
            className="dropdown-menu right"
            aria-labelledby="dropdownMenuButton"
          >
            <li>
              <span className="dropdown-item disabled">{user}</span>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <button type="button" className="dropdown-item btn btn-light" onClick={handleLogout}>
                Logout <FiLogOut />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
