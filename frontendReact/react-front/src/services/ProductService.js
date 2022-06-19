import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/products";
const EMPLOYEE_BASE_REST_API_URL_BY_ID =
  "http://localhost:8080/api/products/search/findByCategoryId?id=";
const CATEGORY_PRODUCTS = "http://localhost:8080/api/product-category";

class EmployeeService {
  getAllProducts() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createProduct(product) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, product);
  }
  getCategoryById(id) {
    console.log("category by id" + CATEGORY_PRODUCTS + id);
    return axios.get(`${CATEGORY_PRODUCTS}/${id}/products`);
  }

  getProductsById(id) {
    console.log("acaaa" + EMPLOYEE_BASE_REST_API_URL_BY_ID + id);
    return axios.get(EMPLOYEE_BASE_REST_API_URL_BY_ID + id);
  }

  updateProduct(productId, product) {
    return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + productId, product);
  }

  deleteProduct(product) {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + product);
  }
}

export default new EmployeeService();
