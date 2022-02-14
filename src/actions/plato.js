// import { fetchProduct } from "../helpers/fetch";
import { platos } from "../data/search";
import { types } from "../types/types"


export const searchPlato = () => {
  return async (dispatch) => {
    // const resp = await fetchProduct( search );
    // console.log( resp )

    // if (resp.status === 200) {
    //   const { results } = resp.data;
    //   dispatch(listPlato({
    //     list: results
    //   }));
    // }

    dispatch(listPlato(platos));
  }
}

const listPlato = ( list ) => ({
  type: types.platoSearch,
  payload: list
})