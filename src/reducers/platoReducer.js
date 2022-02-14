import { types } from "../types/types";

const initialState = {
  platoList:[]
}

export const platoReducer = (state = initialState, action) => {
  switch ( action.type ) {

    case types.platoSearch:
      return {
        ...state,
        platoList: action.payload
      }

    default:
      return state;
  }
}