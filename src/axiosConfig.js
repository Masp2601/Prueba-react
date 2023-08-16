import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  headers: {
    "app-id": process.env.REACT_APP_DUMMY_API_APP_ID || ''
  }
});

export default axiosInstance;