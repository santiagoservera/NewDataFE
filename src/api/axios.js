import axios from "axios";

const instance = axios.create({
  baseURL: "https://newdatabe.onrender.com/auth",
  withCredentials: true,
});

export default instance;
