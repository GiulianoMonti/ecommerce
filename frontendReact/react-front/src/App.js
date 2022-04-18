import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import ListProductsController from "./components/ListProductsController";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListProductsController />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
