import axios from "axios";

export const signUp = async ({ username, email, password }) => {
  const res = await axios.post("http://localhost:8080/api/v1/users", {
    username,
    email,
    password
  });
  return res.data;
};

export const login = async ({username, password}) => {
  const res = await axios.post("http://localhost:8080/login", {
    username,
    password,
  });
  return res;
}