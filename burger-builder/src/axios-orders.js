import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-bbaed.firebaseio.com"
});

export default instance;
