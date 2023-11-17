import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar.jsx";
import { Analytics, Cart, Order, Store } from "./Pages/Navbarpages/index.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
