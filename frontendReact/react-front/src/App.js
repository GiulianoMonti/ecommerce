import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Navbar />
        <Routes>
          <Route path="/:id" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/category/:id" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
