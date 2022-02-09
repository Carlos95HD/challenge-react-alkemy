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

  } catch ( error ) {
    return error;
  }
};
