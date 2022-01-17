import axios from "axios";

const instance = axios.create({
  baseURL: 'https://localhost:5001',
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;