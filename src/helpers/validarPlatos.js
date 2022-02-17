export const validarPlatos = (menuList, plato) => {
  let isValid = true;
  let vegan = 0;
  let noVegan = 0;

  menuList.map( p => (p.vegan ? (vegan += 1) : (noVegan += 1)) );

  if (plato.vegan && vegan === 2) {
    isValid = false;
  } else if (!plato.vegan && noVegan === 2) {
    isValid = false;
  }

  return isValid;
};
