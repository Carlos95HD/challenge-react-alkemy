import Swal from "sweetalert2";
import { getRecipeInformation } from "../api/axios";
import { calculateAveraging } from "../helpers/calculateAveraging";
import { validarPlatos } from "../helpers/validarPlatos";
import { types } from "../types/types";

export const startAddToMenu = ( id ) => {
  return async (dispatch, getState) => {
    const { menuList } = getState().menu;

    if (menuList.length < 4) {

      try {
        const resp = await getRecipeInformation( id );
        const result = resp.data

        validarPlatos(menuList, result)
          ? dispatch(addToMenu(result))
          : Swal.fire({
              title: "Atención",
              text: "Solo puedes agregar 2 platos al veganos, y 2 que no lo sean.",
              icon: "info",
          });
        
          dispatch(startSyncLocalStorage());

      } catch (error) {
        console.log( error );
      }

    } else {
      return Swal.fire({
        title: "Limite Alcanzado!",
        text: "Solo puedes agregar 4 platos al menú",
        icon: "info",
      });
    }
  };
};

const addToMenu = ( plato ) => ({
  type: types.menuAddNew,
  payload: plato,
});

export const startDeleteToMenu = (id) => {
  return (dispatch) => {
    dispatch(deleteToMenu(id));
    dispatch(startSyncLocalStorage());
  };
};

const deleteToMenu = ( id ) => ({
  type: types.menuDelete,
  payload: id,
});

const startTotalUpdate = () => {
  return (dispatch, getState) => {
    const { menuList } = getState().menu;
    const total = calculateAveraging(menuList);

    dispatch(totalUpdate(total));
  };
};

const totalUpdate = (total) => ({
  type: types.menuTotalUpdate,
  payload: total,
});

export const startSyncLocalStorage = () => {
  return (dispatch, getState) => {
    const { menuList } = getState().menu;
    localStorage.setItem('menuList', JSON.stringify(menuList));
    dispatch(startTotalUpdate());
  }
}
