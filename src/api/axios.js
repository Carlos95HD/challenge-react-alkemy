import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEYSPOONACULAR;

export const searchRecipes = async ( q ) => {

  const url = `https://api.spoonacular.com/recipes/complexSearch`;
  try {
    return await axios.get(url, {
      params: {
        query: q,
        number: 50,
        addRecipeInformation: true,
        apiKey
      }
    });
  } catch (error) {
    return error;
  }
};