import React from "react";
// import Homebg from "./Logo/Homebg.jpg";
import Hmainbg from "./HomeComp/Hmainbg";
import Cards from "./HomeComp/Cards.js";
// import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Courses from "./Courses";

function Home() {
  const arrCards = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      {/* <h3>Home</h3> */}
      {/* <div
        className="container bg-success "
        style={{
          height: 480,
          backgroundImage: `url(${Homebg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6 " style={{ marginTop: 120 }}>
            <h3>Become Master</h3>
            <h1>Learn New Skills Online</h1>
            <h1>Find Best Courses</h1>
            <button className="btn btn-warning px-4">Get A Quote</button>
            <button className="mx-2 btn btn-light px-4">Read more</button>
          </div>
        </div>
      </div> */}
      {/* <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div> */}
      <Hmainbg></Hmainbg>
      {/* <Cards></Cards> */}
      <br></br>
      <h1
        className="text-center"
        style={{ fontFamily: "italic", fontWeight: "bolder" }}
      >
        Top Featured Courses
      </h1>
      <br></br>
      <div className="container ">
        <div className="row mb-3 justify-content-center">
          {/* <div className=" d-flex"> */}
          <div className="col-lg-4 col-md-10 col-sm-10 px-2 " style={{}}>
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Cards></Cards>
            </Link>
          </div>
          <div className="col-lg-4 col-md-10 col-sm-10 px-2">
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Cards></Cards>
            </Link>
          </div>
          <div className="col-lg-4 col-md-10 col-sm-10 px-2">
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Cards></Cards>
            </Link>
          </div>
          {/* </div> */}
        </div>
        {/* //////////////////////// */}
        <div className="row justify-content-center mb-3">
          {/* <div className=" d-flex"> */}
          <div className="col-lg-4 col-md-10 col-sm-10  px-2 " style={{}}>
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Cards></Cards>
            </Link>
          </div>
          <div className="col-lg-4 col-md-10 col-sm-10  px-2">
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Cards></Cards>
            </Link>
          </div>
          <div className="col-lg-4 col-md-10 col-sm-10  px-2">
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Cards></Cards>
            </Link>
          </div>
          {/* </div> */}
        </div>
        {/* //////////////////////// */}
        <div className="row justify-content-center mb-3">
          {/* <div className=" d-flex"> */}
          <div className="col-lg-4 col-md-10 col-sm-10 px-2 " style={{}}>
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Cards></Cards>
            </Link>
          </div>
          <div className="col-lg-4 col-md-10 col-sm-10 px-2">
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Cards></Cards>
            </Link>
          </div>
          <div className="col-lg-4 col-md-10 col-sm-10 px-2">
            <Link to="/courses" style={{ textDecoration: "none" }}>
              <Cards></Cards>
            </Link>
          </div>
          {/* </div> */}
        </div>
        {/* //////////////////////// */}
        {/* //////////////////////// */}
        {/* //////////////////////// */}

        {/* //////////////////////// */}
        {/* //////////////////////////////// */}
        <Routes>
          <Route path="/courses" element={<Courses></Courses>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Home;
