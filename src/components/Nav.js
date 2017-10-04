import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import navLogo from '../img/logo.png';
export default class Nav extends Component {
  render() {
    return (
      <div id="page-top">
        <nav
          className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top"
          id="mainNav"
        >
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

            <NavLink className="navbar-brand nav-icon" to='/'><img className="nav-icon" src={navLogo}/> </NavLink>

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown navbarResponsive"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown js-scroll-trigger">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/apparel">
                    Costumes
                  </a>
                  <a className="dropdown-item" href="/decor">
                    Decorations
                  </a>
                  <a className="dropdown-item" href="/food">
                    Treats
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
