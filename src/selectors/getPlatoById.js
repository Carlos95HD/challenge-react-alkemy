import { homedb } from "../data/home";

export const getPlatoById = ( id = '' ) => {
  return homedb.find( plato => plato.id.toString() === id );
}