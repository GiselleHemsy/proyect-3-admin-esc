import axios from "axios";

const axiosBack = axios.create(
  {
    baseURL : "http://localhost:5000"
  }
);

export default axiosBack;
