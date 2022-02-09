import { Navigate } from "react-router-dom"

export const PrivateRoute = ({token, user, children}) => {
  return token && user ? children : <Navigate to="/login" />;
};