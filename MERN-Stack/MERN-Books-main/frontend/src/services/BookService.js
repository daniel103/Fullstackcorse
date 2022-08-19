import axios from "axios";
const API_URL = `${process.env.REACT_APP_API_URL}api/v1/book`;

class BookService {
  getAllBook() {
    return axios.get(API_URL);
  }

  getOneBook(id) {
    return axios.get(`${API_URL}/${id}`);
  }
}

export default new BookService();
