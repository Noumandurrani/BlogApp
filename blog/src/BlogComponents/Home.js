import React from "react";
// import Homebg from "./Logo/Homebg.jpg";
import Hmainbg from "./HomeComp/Hmainbg";
import Cards from "./HomeComp/Cards.js";
// import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Courses from "./Courses";

function Home() {
  // const arrCards = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
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
        <div className="row mb-3">
          <div className="col-lg-12 col-md-12  col-sm-12 col-12 d-flex">
            <div className="col-lg-4 col-sm-4 col-md-4 col-4 px-2" style={{}}>
              <Link to="/courses" style={{ textDecoration: "none" }}>
                <Cards></Cards>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 col-4  px-2">
              <Link to="/courses" style={{ textDecoration: "none" }}>
                <Cards></Cards>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 col-4 px-2">
              <Link to="/courses" style={{ textDecoration: "none" }}>
                <Cards></Cards>
              </Link>
            </div>
          </div>
        </div>
        {/* //////////////////////// */}
        <div className="row mb-3">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex">
            <div className="col-lg-4 col-sm-4 col-md-4 col-4 px-2">
              <Link to="/courses" style={{ textDecoration: "none" }}>
                <Cards></Cards>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4  col-4 px-2">
              <Link to="/courses" style={{ textDecoration: "none" }}>
                <Cards></Cards>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 col-4 px-2">
              <Link to="/courses" style={{ textDecoration: "none" }}>
                <Cards></Cards>
              </Link>
            </div>
          </div>
        </div>
        {/* /////////////////////////////// */}
        <div className="row mb-3">
          <div className="col-lg-12 col-md-12 col-12 col-sm-12 d-flex">
            <div className="col-lg-4 col-sm-4 col-md-4 col-4 px-2">
              <Link to="/courses" style={{ textDecoration: "none" }}>
                <Cards></Cards>
              </Link>
            </div>
            <div className="col-lg-4  col-sm-4 col-md-4 col-4 px-2">
              <Link to="/courses" style={{ textDecoration: "none" }}>
                <Cards></Cards>
              </Link>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 col-4 px-2">
              <Link to="/courses" style={{ textDecoration: "none" }}>
                <Cards></Cards>
              </Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/courses" element={<Courses></Courses>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Home;
