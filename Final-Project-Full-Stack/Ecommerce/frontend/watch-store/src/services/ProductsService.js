import axios from 'axios';
const API_URL = `${process.env.REACT_APP_API_URL}/api/product/v1`;

class ProductsService {
    getAllProducts() {
      return axios.get(API_URL);
    }
  
    getOneProduct(id) {
      return axios.get(API_URL, id);
    }
    addProduct(body) {
      return axios.post(`${API_URL}`, body);
  }
  updateProduct(body, id) {
    return axios.put(`${API_URL}/${id}`, body);
}
  }
  
  export default new ProductsService();