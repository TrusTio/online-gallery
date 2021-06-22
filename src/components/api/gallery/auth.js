import axios from "config/axios";

export const signUp = async ({ username, email, password }) => {
  const res = await axios.post(
    "https://online-gallery-react.herokuapp.com/api/v1/users/signup",
    {
      username,
      email,
      password,
    }
  );
  return res.data;
};

export const signIn = async ({ username, password }) => {
  const res = await axios.post("https://gallery-rest-api.herokuapp.com/login", {
    username,
    password,
  });
  return res;
};

export const signOut = async () => {
  const res = await axios.get("/logout");
  return res;
};
