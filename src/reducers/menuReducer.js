import { types } from "../types/types";

const initialState = {
  menuList: [],
  menuAverage: {}
}

export const menuReducer = (state = initialState, action) => {

  switch ( action.type ) {
    case types.menuAddNew:
      return {
        ...state,
        menuList: [action.payload, ...state.menuList]
      }

    case types.menuDelete:
      return {
        ...state,
        menuList: state.menuList.filter( p => ( p.id !== action.payload.id ) )
      }

    case types.menuTotalUpdate:
      return {
        ...state,
        menuAverage: action.payload
      }

    default:
      return state;
  }
}