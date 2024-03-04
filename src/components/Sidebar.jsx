import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="sidebar container-fluid bg-primary"
      style={{ width: "max-content", height : "100vh"}}
    >
      <div className="row flex-nowrap ">
        <div
          style={{ width: "max-content" }}
          className=" col-auto  p-3 col-md-3 col-lg-2 min-vh-100 d-flex flex-column justify-content-between"
        >
          <div className=" " style={{ width: "max-content" }}>
            <ul className="nav nav-pills flex-column mt-2">
              <li className="nav-logo rounded-3 p-1">
                <Link to="/" className="nav-link text-white"  >
                <i className="fa-solid fa-user-doctor"></i>
                  <span className="ms-2 d-none d-sm-inline">WaveSolution </span>
                </Link>
              </li>
              <hr className="rounded-3"/>
              <li className="nav-item rounded-3 p-1" >
                <NavLink
                to="/user/home"
                  className="nav-link "
                  activeClassName="active"
                  exact
                >
                  <i className="fa-solid fa-house"></i>
                  <span className="ms-2 d-none d-sm-inline">Home </span>
                </NavLink>
              </li>
              <li className="nav-item rounded-3 p-1">
                <NavLink   to="/user/diagnostic" className="nav-link " activeClassName="active" exact>
                  <i className="fa-solid fa-stethoscope"></i>
                  <span className="ms-2 d-none d-sm-inline">Diagnostics </span>
                </NavLink>
              </li>
              <li className="nav-item rounded-3 p-1">
                <Link className="nav-link " activeClassName="active" exact>
                  <i className="fa-solid fa-clipboard"></i>
                  <span className="ms-2 d-none d-sm-inline">Reports </span>
                </Link>
              </li>
              <li className="nav-item rounded-3 p-1">
                <Link className="nav-link " activeClassName="active" exact>
                  <i className="fa-solid fa-clipboard"></i>
                  <span className="ms-2 d-none d-sm-inline">Chat </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" " style={{ width: "max-content" }}>
            <ul className="nav nav-pills flex-column mt-2">
              <li className="nav-item rounded-3 p-1">
                <Link  className="nav-link " activeClassName="" exact>
                <i className="fa-solid fa-right-from-bracket"></i>
                  <span className="ms-2 d-none d-sm-inline">Username </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
