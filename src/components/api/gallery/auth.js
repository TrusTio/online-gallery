import axios from "config/axios";

export const signUp = async ({ username, email, password }) => {
  const res = await axios.post("/api/v1/users/signup", {
    username,
    email,
    password,
  });
  return res.data;
};

export const signIn = async ({ username, password }) => {
  const res = await axios
    .post("/login", {
      username,
      password,
    });
  return res;
};
