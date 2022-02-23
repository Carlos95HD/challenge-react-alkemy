import Swal from "sweetalert2";
import { calculateAveraging } from "../helpers/calculateAveraging";
import { validarPlatos } from "../helpers/validarPlatos";
import { types } from "../types/types";

export const startAddToMenu = ( id ) => {
  return async (dispatch, getState) => {
    const { menuList } = getState().menu;
    const { platoList } = getState().plato;

    if (menuList.length < 4) {
      const [ platoFiltered ] = platoList.filter( plato => plato.id === id );

      validarPlatos(menuList, platoFiltered)
        ? dispatch(addToMenu(platoFiltered))
        : Swal.fire({
            title: "Warning",
            text: "Only 2 dishes can be added to vegans, and 2 that are not.",
            icon: "info",
        });

        dispatch(startSyncLocalStorage());

    } else {
      return Swal.fire({
        title: "Limit Reached!",
        text: "You can only add 4 dishes to the menu.",
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
