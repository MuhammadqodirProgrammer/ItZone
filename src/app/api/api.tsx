import axios from "axios";
// const token = localStorage.getItem("token");
export const baseURL = `http://165.227.164.31:4040/api`;
export const baseURLImg = `http://165.227.164.31:4040`;
const apiRoot = axios.create({
  baseURL: `http://165.227.164.31:4040/api`,
  //   headers:{
  //     Authorization: `Bearer ${token}`,
  //   }
});

export default apiRoot;
