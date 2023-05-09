import React from "react";
import llll from "../Logo/llll.jpg";

function Footer() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgb(27, 27, 133)" }}
    >
      <div
        className="container"
        style={{ height: 130, backgroundColor: "rgb(27, 27, 133)" }}
      >
        <nav
          className="navbar navbar-dark navbar-expand-lg"
          style={{ backgroundColor: "rgb(27, 27, 133)" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={llll} style={{ height: 100 }}></img>
            </a>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link">Community</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Courses</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
