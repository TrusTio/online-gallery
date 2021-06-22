import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://gallery-rest-api.herokuapp.com";

export default axios;
