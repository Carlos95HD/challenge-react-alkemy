import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEYSPOONACULAR;

export const searchRecipes = async ( q ) => {

  const url = `https://api.spoonacular.com/recipes/complexSearch`;
  try {
    return await axios.get(url, {
      params: {
        query: q,
        number: 9,
        apiKey
      }
    });
  } catch (error) {
    return error;
  }
};

export const getRecipeInformation = async ( id ) => {

  const url = `https://api.spoonacular.com/recipes/${ id }/information`;
  try {
    return await axios.get(url, {
      params: {
        includeNutrition: false,
        apiKey
      }
    });
  } catch (error) {
    return error;
  }
};