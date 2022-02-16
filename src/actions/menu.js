import Swal from "sweetalert2";
import { homedb } from "../data/home";
import { calculateAveraging } from "../helpers/calculateAveraging";
import { types } from "../types/types"

export const startAddToMenu = (plato) => {
  return ( dispatch, getState ) => {
    const { menuList } = getState().menu;

    if ( menuList.length < 4 ) {
      homedb.filter( p => p.id === plato.id && dispatch( addToMenu(p) ))
      //Actualizar Promedios
      dispatch(startTotalUpdate());
    } else {
      return Swal.fire({
        title: "Oops...",
        text: "Solo puedes agregar 4 platos al menú",
        icon:'info'
      });
    }

  }
}

const addToMenu = (plato) => ({
  type: types.menuAddNew,
  payload: plato
})

export const startDeleteToMenu = (plato) => {
  return ( dispatch ) => {
    dispatch( deleteToMenu(plato) )
    //Actualizar Promedios
    dispatch(startTotalUpdate());
  }
}

const deleteToMenu = ( plato ) => ({
  type: types.menuDelete,
  payload: plato
})

const startTotalUpdate = () => {
  return ( dispatch, getState ) => {
    const { menuList } = getState().menu;
    const total = calculateAveraging(menuList);

    dispatch(totalUpdate(total));
  }
}

const totalUpdate = ( total ) => ({
  type: types.menuTotalUpdate,
  payload: total
})