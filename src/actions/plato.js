import { types } from "../types/types"
import { searchRecipes } from "../api/axios";
import { startLoading, stopLoading } from "./ui";
import Swal from "sweetalert2";


export const searchPlato = ( search ) => {
  return async (dispatch) => {
    dispatch(startLoading())
    const resp = await searchRecipes( search );

    if (resp.status === 200) {
      const { results } = resp.data;

      if (results.length > 0) {
        dispatch(stopLoading());
        dispatch(listPlato(results));
      } else {
        dispatch(stopLoading());
        Swal.fire(
          'No hay resultados',
          'Intente escribiendo otro plato',
          'info'
        )
      }
    } else {
      dispatch(stopLoading());
      Swal.fire(
        'Oops...',
        'Ha ocurrido un error intentalo de nuevo',
        'error'
      )
    }

  }
}

const listPlato = ( list ) => ({
  type: types.platoSearch,
  payload: list
})