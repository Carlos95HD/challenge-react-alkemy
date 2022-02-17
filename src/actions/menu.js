import Swal from "sweetalert2";
import { homedb } from "../data/home";
import { calculateAveraging } from "../helpers/calculateAveraging";
import { validarPlatos } from "../helpers/validarPlatos";
import { types } from "../types/types";

export const startAddToMenu = ( plato ) => {
  return (dispatch, getState) => {
    const { menuList } = getState().menu;

    if (menuList.length < 4) {
      //TODO:
      homedb.forEach((p) => {
        if (p.id === plato.id) {
          validarPlatos(menuList, p)
            ? dispatch(addToMenu(p))
            : Swal.fire({
                title: "Atención",
                text: "Solo puedes agregar 2 platos al veganos, y 2 que no lo sean.",
                icon: "info",
            });
        }
      });

      dispatch(startSyncLocalStorage());
    } else {
      return Swal.fire({
        title: "Limite Alcanzado!",
        text: "Solo puedes agregar 4 platos al menú",
        icon: "info",
      });
    }
  };
};

const addToMenu = (plato) => ({
  type: types.menuAddNew,
  payload: plato,
});

export const startDeleteToMenu = (plato) => {
  return (dispatch) => {
    dispatch(deleteToMenu(plato));
    dispatch(startSyncLocalStorage());
  };
};

const deleteToMenu = (plato) => ({
  type: types.menuDelete,
  payload: plato,
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
