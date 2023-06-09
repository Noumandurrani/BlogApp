import logo from "./logo.svg";
import "./App.css";
import Home from "./BlogComponents/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./BlogComponents/About";
import educationLogo from "./BlogComponents/Logo/educationLogo.jpg";
import Courses from "./BlogComponents/Courses";
// import Footer from "./BlogComponents/AppComp/Footer";
import llll from "./BlogComponents/Logo/llll.jpg";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <div className="BlopApp">
      <div className="mt-4">
        <Navbar bg="warning" expand="lg md">
          <div className="container">
            <div className="d-flex col-lg-10 col-md-8 col-sm-8 col-8 text-dark">
              <div className="">
                <a href="#" className=" nav-link mx-2">
                  <i class="fa-solid fa-location-dot fs-5 mx-1"></i>
                  1606 Amphitheatre Parkway, CA 94043
                </a>
              </div>
              <div className="">
                <a href="#" className="nav-link mx-2">
                  <i className="fa-solid fa-envelope  fs-5 mx-1"></i>
                  vdvsfd@outlook.com
                </a>
              </div>
            </div>
            <Navbar.Toggle aria-controls="nava" />
            <Navbar.Collapse id="nava">
              <Nav className="">
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
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        {/* ////////////////////////// */}
        <Router>
          <div>
            <Navbar
              bg="light"
              expand="lg md"
              // style={{
              //   position: "fixed",
              //   top: "10",
              //   zIndex: "1000",
              //   right: "0",
              //   left: "0",
              // }}
            >
              <div className="container">
                {/* <div
                  className=""
                  // style={{ justifyContent: "space-between" }}
                > */}
                <Navbar.Brand href="#" className="">
                  <img src={educationLogo} alt="img"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  style={{ justifyContent: "end" }}
                >
                  <Nav className="" style={{ justifyContent: "end" }}>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/courses" className="nav-link">
                        Courses
                      </Link>
                    </li>
                    <li className="nav-item bg-warning rounded mx-4 px-4">
                      <Link to="#" className="nav-link ">
                        SignUp
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button type="button" className="btn border-dark">
                        <i className="fa-brands fa-searchengin fs-5"></i>
                      </button>
                    </li>
                  </Nav>
                </Navbar.Collapse>
                {/* </div> */}
              </div>
            </Navbar>
            {/* <nav className="navbar navbar-expand-lg navbar-light fw-bold border border-success border-top-0  border-end-0  border-start-0 border-3 py-2">
              <div className="container">
                <a href="#" className="navbar-brand">
                  <img src={educationLogo} alt="img"></img>
                </a>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/courses" className="nav-link">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item bg-warning rounded mx-4 px-4">
                    <Link to="#" className="nav-link ">
                      SignUp
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn border-dark">
                      <i className="fa-brands fa-searchengin fs-5"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </nav> */}
          </div>
          {/* ////////////////////////////////Footer//////////////////// */}

          {/* //////////////////////////////////////////////////// */}
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            {/* <Route path="/get" element={<Get></Get>}></Route> */}
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/courses" element={<Courses></Courses>}></Route>
          </Routes>
          {/* //////////////////////////////Footer////////////////////// */}
          <div
            className="container-fluid mt-5 "
            style={{ backgroundColor: "rgb(27, 27, 133)" }}
          >
            <div
              className="container"
              style={{ height: 130, backgroundColor: "rgb(27, 27, 133)" }}
            >
              <nav
                className="navbar navbar-dark navbar-expand-lg "
                style={{ backgroundColor: "rgb(27, 27, 133)" }}
              >
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    <img src={llll} style={{ height: 100 }}></img>
                  </a>

                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Community
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/courses" className="nav-link">
                        Courses
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          {/* //////////////////////////////////////////////////// */}
        </Router>
      </div>
      {/* //////////////////////////////Footer */}
      {/* <Footer></Footer> */}
      {/* <Router>
        <div
          className="container-fluid mt-5"
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
                    <Link to="/" className="nav-link">
                      Community
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Courses</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </Router> */}

      {/* ?//////////////////////////////////// */}
    </div>
  );
}

export default App;

{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}
