import axios from "axios";
const API_URL = `${process.env.REACT_APP_API_URL}auth/`;

class AuthService {
  login(username, password) {
    return axios.post(`${API_URL}login`, { username, password });
  }

  logout() {
    return axios.delete(`${API_URL}logout`);
  }

  register(body) {
    return axios.post(`${API_URL}register`, body);
  }
}

export default new AuthService();
