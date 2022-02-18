export const getPlatoById = ( id = '' ) => {
  const menuList = JSON.parse(localStorage.getItem('menuList')) || [];

  return menuList.find( plato => plato.id.toString() === id );
}