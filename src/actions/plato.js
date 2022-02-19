import { types } from "../types/types"
import { searchRecipes } from "../api/axios";
import { startLoading, stopLoading } from "./ui";


export const searchPlato = ( search ) => {
  return async (dispatch) => {
    dispatch(startLoading())
    const resp = await searchRecipes( search );

    if (resp.status === 200) {
      const { results } = resp.data;

      dispatch(stopLoading());
      dispatch(listPlato(results));
    }

  }
}

const listPlato = ( list ) => ({
  type: types.platoSearch,
  payload: list
})