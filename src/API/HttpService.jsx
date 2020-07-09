import axios from "axios";

const http = axios.create({
  baseURL: "https://education-app1.herokuapp.com/api/",
  // baseURL: "http://localhost:5000/api/",
});

export default http;
