import { types } from "../types/types"
import { searchRecipes } from "../api/axios";


export const searchPlato = ( search ) => {
  return async (dispatch) => {
    const resp = await searchRecipes( search );

    if (resp.status === 200) {
      const { results } = resp.data;
      dispatch(listPlato(results));
    }

  }
}

const listPlato = ( list ) => ({
  type: types.platoSearch,
  payload: list
})