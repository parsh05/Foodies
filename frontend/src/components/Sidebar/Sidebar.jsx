import React from "react";
import { Link } from "react-router-dom";
import ListFood from "./../../pages/ListFood/ListFood";

const Sidebar = ({sidebarVisible}) => {
  return (
    <div className={`border-end bg-white ${sidebarVisible? '' : 'd-none'}`} id="sidebar-wrapper">
      
      <div className="sidebar-heading border-bottom bg-light">Foody App</div>
      <div className="list-group list-group-flush">
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to={"/add"}
        >
          Add Food
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to={"/list"}
        >
          ListFood
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to={"/orders"}
        >
          Orders
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to={"/orders"}
        >
          Orders
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to={"/orders"}
        >
          Orders
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to={"/orders"}
        >
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
