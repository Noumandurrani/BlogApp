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
      <h3>Home</h3>
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

      <div className="container bg-warning">
        <div className="col-lg-3 d-inline">
          <Link to="/courses" style={{ textDecoration: "none" }}>
            <Cards></Cards>
          </Link>
          <Link to="/courses" style={{ textDecoration: "none" }}>
            <Cards></Cards>
          </Link>
          <Link to="/courses" style={{ textDecoration: "none" }}>
            <Cards></Cards>
          </Link>
          <Routes>
            <Route path="/courses" element={<Courses></Courses>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Home;
