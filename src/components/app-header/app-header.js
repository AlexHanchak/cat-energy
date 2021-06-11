import React from "react";

import { NavLink } from "react-router-dom";
import "./app-header.sass";

const AppHeader = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="header-nav-bar"
    >
      <img
        alt=""
        className="my-0 mr-md-auto"
        src={require("../../images/logo-desktop.svg")}
      />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarColor03"
      >
        <ul className="navbar-nav" id="buttons-nav-top">
          <li className="nav-item m-2">
            <NavLink className="link secondary"
            activeClassName="activeM"
            to={"/"}>
              ГЛАВНАЯ
            </NavLink>
          </li>
          <li className="nav-item m-2">
            <NavLink className="link secondary"
                  activeClassName="active"
            to={"/MainProduct"}>
              КАТАЛОГ ПРОДУКЦИИ
            </NavLink>
          </li>
          <li className="nav-item m-2">
            <NavLink className="link secondary"
                  activeClassName="active"
            to={"/Programs"}>
              ПОДБОР ПРОГРАММЫ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppHeader;
