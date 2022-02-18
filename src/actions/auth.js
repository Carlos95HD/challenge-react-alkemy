import Swal from "sweetalert2";
import { fetchLogin } from "../api/auth";
import { types } from "../types/types";
import { stopLoading } from "./ui";

//Login
export const startLogin = ( email, password ) => {
  return async ( dispatch ) => {
    const resp = await fetchLogin( email , password);

    if ( resp?.status === 200 ) {
      const { token } = resp.data;
      localStorage.setItem( 'token', token );
      localStorage.setItem( 'user', email );
      dispatch( login({
        user: email
      }))
      dispatch( stopLoading() )
    } else {
      dispatch( stopLoading() )
      Swal.fire( 'Error','Email o Password Incorrecto', 'error');
    }
  }
}

export const startLogout = () => {
  return ( dispatch ) => {
    localStorage.clear();
    dispatch( logout() );
  }
}

const login = ( user ) => ({
  type: types.authLogin,
  payload: user
})

const logout = () => ({
  type: types.authLogout
})

//Verifica existe usuario activo con token
export const startChecking = () => {
  return ( dispatch ) => {
    const user = localStorage.getItem('user');

    if ( !!user ) {
      dispatch( login({
        user: user
      }))
    }
    dispatch(authCheckingFinish())
  }
}

const authCheckingFinish = () => ({
  type: types.authCheckingFinish
})