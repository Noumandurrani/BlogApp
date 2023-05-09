import React from "react";
import Homebg from "../Logo/Homebg.jpg";

function Hmainbg() {
  return (
    <>
      <div>Home Components</div>
      <div
        className="container bg-success "
        style={{
          height: 480,
          backgroundImage: `url(${Homebg})`,
          backgroundSize: "cover",
        }}
      >
        {/* <img src={Homebg} alt="img"></img> */}
        <div className="row align-items-center">
          <div className="col-lg-6 " style={{ marginTop: 120 }}>
            <h3>Become Master</h3>
            <h1>Learn New Skills Online</h1>
            <h1>Find Best Courses</h1>
            <button className="btn btn-warning px-4">Get A Quote</button>
            <button className="mx-2 btn btn-light px-4">Read more</button>
          </div>
        </div>
      </div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
    </>
  );
}

export default Hmainbg;
