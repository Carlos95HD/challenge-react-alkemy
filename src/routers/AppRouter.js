import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { user, checking } = useSelector( state => state.auth )

  useEffect(() => {
    dispatch( startChecking() );
  }, [ dispatch ]);

  if (checking) {
    return (<h1>Espere..</h1>);
  }

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path="/login" 
          element={
            <PublicRoute token= {!!token}>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route  
          path="/*"
          element={
            <PrivateRoute user={ user } token= {!!token}>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />


        {/* Redirect */}
        <Route  path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
};
