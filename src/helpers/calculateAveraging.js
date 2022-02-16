export const calculateAveraging = (menuList) => {
  let total = {
    totalHealthScore: 0,
    totalPrice: 0,
    readyInMinutesAvg: 0,
  };

  menuList.map((plato) => {
    total.totalPrice += plato.pricePerServing * plato.servings;
    total.totalHealthScore += plato.healthScore;
    total.readyInMinutesAvg += plato.readyInMinutes;
  });

  if (total.totalHealthScore !== 0) {
    total.totalHealthScore = total.totalHealthScore / menuList.length;
  }

  total.totalPrice =
    Math.round((total.totalPrice + Number.EPSILON) * 100) / 100;
  total.totalHealthScore =
    Math.round((total.totalHealthScore + Number.EPSILON) * 100) / 100;
  total.readyInMinutesAvg =
    Math.round((total.readyInMinutesAvg + Number.EPSILON) * 100) / 100;

  return total;
};