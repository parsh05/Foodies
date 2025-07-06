import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import ContactUs from "./pages/Contact/Contact";
import ExploreFood from "./pages/ExploreFood/ExploreFood";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Menubar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/explore" element={<ExploreFood />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
