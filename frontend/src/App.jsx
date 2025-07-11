import React from "react";
import AddFood from "./pages/AddFood/AddFood";
import ListFood from "./pages/ListFood/ListFood";
import Sidebar from "./components/Sidebar/Sidebar";
import Menubar from "./components/Menubar/Menubar";
import { Routes, Route } from "react-router";
import { useState } from "react";
import {ToastContainer} from "react-toastify";
import Orders from "./pages/Orders/Orders";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar sidebarVisible = {sidebarVisible} />

      <ToastContainer/>
      <div id="page-content-wrapper">
        <Menubar toggleSidebar = {toggleSidebar} /> {/* <!-- Page content--> */}
        <div className="container-fluid">
          <Routes>
            <Route path="/add" element={<AddFood />} />
            <Route path="/list" element={<ListFood />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<ListFood />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
