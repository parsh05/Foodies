import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./components/Login/Login";
import Menubar from "./components/Menubar/Menubar";
import Register from "./components/Register/Register";
import { StoreContext } from "./context/StoreContext";
import ContactUs from "./pages/Contact/Contact";
import ExploreFood from "./pages/ExploreFood/ExploreFood";
import FoodDetails from "./pages/FoodDetails/FoodDetails";
import Home from "./pages/Home/Home";
import MyOrders from "./pages/MyOrders/MyOrders";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeorder/placeOrder";

function App() {
  const { token } = useContext(StoreContext);
  const location = useLocation();
  const hideMenu = ["/login", "/register"].includes(location.pathname);

  return (
    <div>
      {!hideMenu && <Menubar />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreFood />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={token ? <PlaceOrder /> : <Login />} />
        <Route path="/login" element={token ? <Home /> : <Login />} />
        <Route path="/register" element={token ? <Home /> : <Register />} />
        <Route path="/myorders" element={token ? <MyOrders /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
