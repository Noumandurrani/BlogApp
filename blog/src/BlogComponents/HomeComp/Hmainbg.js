import React from "react";
import b from "../Logo/b.jpg";

function Hmainbg() {
  return (
    <>
      <div
        className="container bg-success mt-5 mb-5"
        style={{
          height: 480,
          backgroundImage: `url(${b})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 " style={{ marginTop: 140 }}>
              <h3 style={{ fontWeight: "bold " }}>Become Master</h3>
              <h1 style={{ fontFamily: " italic", fontWeight: "bold " }}>
                Learn New Skills Online
              </h1>
              <h1 style={{ fontFamily: " italic", fontWeight: "bold " }}>
                Find Best Courses
              </h1>
              <button className="btn btn-warning px-4">Get A Quote</button>
              <button className="mx-2 btn btn-light px-4">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hmainbg;
