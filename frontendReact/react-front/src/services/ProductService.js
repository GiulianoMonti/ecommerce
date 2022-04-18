import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/products";

class EmployeeService {
  getAllProducts() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createProduct(employee) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
  }

  getProductById(employeeId) {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId);
  }

  updateProduct(employeeId, employee) {
    return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId, employee);
  }

  deleteProduct(employeeId) {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId);
  }
}

export default new EmployeeService();
