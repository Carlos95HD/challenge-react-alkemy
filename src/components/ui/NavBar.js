import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const NavBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector( state => state.auth );

  const handleLogout = () => {
    dispatch( startLogout() );
  }

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink className="navbar-brand" href="#">Hidden brand</NavLink>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <NavLink className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#">Link</NavLink>
        </li>
      </ul>
      <span className='text-light nav-link'>{ user }</span>
      <button 
        className="btn btn-primary"
        onClick={ handleLogout }
        >
        Logout
      </button>
    </div>
  </nav>
  )
}
