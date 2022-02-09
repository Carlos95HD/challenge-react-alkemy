import { types } from "../types/types";

const initialState = {
  loading: false,
};

export const uiReducer = (state = initialState, action) => {

  switch ( action.type ) {
    case types.uiStartLoading:
      return {
        loading: true,
      }
    case types.uiEndLoading:
      return {
        loading: false,
      }
    default:
      return state;
  }
}