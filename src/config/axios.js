import axios from "axios";

const axiosBack = axios.create(
  {
    baseURL : import.meta.env.VITE_APP_DEPLOYER_KEY
  }
);

export default axiosBack;
