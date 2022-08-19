import axios from 'axios';
const API_URL = "http://localhost:8000/api/user"

class AuthService {
    register(body) {
        return axios.post(`${API_URL}`, body);
    }
    login() {
        return axios.post(`${API_URL}/login`)
    }
}

export default  AuthService;