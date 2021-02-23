import axios from "config/axios";

export const signUp = async ({ username, email, password }) => {
  const res = await axios.post("/api/v1/users", {
    username,
    email,
    password
  });
  return res.data;
};

export const login = async ({username, password}) => {
  const res = await axios.post("/login", {
    username,
    password,
  }).then(function(response){
    console.log(response.headers);
  });
  return res;
}