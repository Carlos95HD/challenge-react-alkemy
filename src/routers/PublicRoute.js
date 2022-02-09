import { Navigate } from "react-router-dom"

export const PublicRoute = ({ token, children }) => {
  return token ? <Navigate to="/" /> : children;
};