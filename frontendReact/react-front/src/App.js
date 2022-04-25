import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import ProductsController from "./components/ProductsController";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsController />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
