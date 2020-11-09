import axios from "axios";

const instance = axios.create({
  baseURL: 'http://192.168.100.52:8080/PetCareAPI/resources',
  timeout: 1000,
});

export default instance;