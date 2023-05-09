import React from "react";
// import educationLogo from "./Logo/educationLogo.jpg";
import educationLogo from "./Logo/educationLogo.jpg";

function Home() {
  return (
    <div>
      {/* <div>Home</div> */}
      <div className="">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-warning "
          style={{ fontSize: 13 }}
        >
          <div className="container ">
            <div className="d-flex">
              <a className="nav-link d-flex mx-3">
                <i class="fa-solid fa-location-dot fs-5 mx-1"></i>
                1606 Amphitheatre Parkway, CA 94043
              </a>
              <a className="nav-link d-flex">
                <i className="fa-solid fa-envelope  fs-5 mx-3"></i>
                vdvsfd@outlook.com
              </a>
            </div>

            <ul className="navbar-nav">
              <li className="nav-item mx-1">
                <a className="nav-link">
                  <i class="fa-brands fa-facebook-f  fw-bold fs-5"></i>
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link">
                  <i class="fa-brands fa-pinterest  fw-bold fs-5"></i>
                </a>
              </li>
              <li className="nav-item bg-warning rounded mx-1">
                <a className="nav-link">
                  <i class="fa-brands fa-twitter  fw-bold fs-5"></i>
                </a>
              </li>
              <li className="nav-item bg-warning rounded mx-1">
                <a className="nav-link">
                  <i class="fa-brands fa-instagram  fw-bold fs-5"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* ////////////////////////// */}
        <nav className="navbar navbar-expand-lg navbar-light fw-bold border border-success border-top-0  border-end-0  border-start-0 border-3 py-2">
          <div className="container ">
            <a href="#" className="navbar-brand">
              <img src={educationLogo} alt="img"></img>
            </a>
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link">About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link">Courses</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link">Contact</a>
              </li>
              <li className="nav-item bg-warning rounded mx-4 px-4">
                <a className="nav-link ">SignUp</a>
              </li>
              <li className="nav-item">
                <button type="button" className="btn border-dark">
                  <i className="fa-brands fa-searchengin fs-5"></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Home;
