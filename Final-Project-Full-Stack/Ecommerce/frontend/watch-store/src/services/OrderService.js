import axios from 'axios';
const API_URL = "http://localhost:8000/api/orders"

class OrderService {
    CreateOrder(body) {
        return axios.post(`${API_URL}`, body);
    }
}

export default  OrderService;