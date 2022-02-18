import axios from "axios";

const BACKEND_SERVER_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api`;

export default axios.create({
  baseURL: BACKEND_SERVER_URL,
});
