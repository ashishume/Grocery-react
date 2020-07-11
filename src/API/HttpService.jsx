import axios from "axios";

const http = axios.create({
  // baseURL: "https://education-app1.herokuapp.com/api/",
  baseURL: "http://192.168.1.47:5000/",
});

export default http;
