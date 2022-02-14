import axios from "axios";

export const fetchLogin = async (email, password) => {
  const url = `http://challenge-react.alkemy.org`;
  const data = {
    email,
    password,
  };

  try {
    return await axios.post(url, data, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    return error;
  }
};

const api = process.env.REACT_APP_APIKEYSPOONACULAR;
export const fetchProduct = async ( product ) => {

  const url = `https://api.spoonacular.com/food/products/search`;
  try {
    return await axios.get(url, {
      params: {
        query: product,
        number: 6,
        apiKey: api,
      }
    });
  } catch (error) {
    return error;
  }
};
