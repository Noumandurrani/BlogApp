import React from "react";
import deswu from "../Logo/deswu.jpg";

function Cards() {
  return (
    <div>
      <div className="">
        <div className="card ">
          <img src={deswu} style={{ height: "100%", width: "100%" }}></img>

          <div className="card-body">
            <h6 className="card-title">
              User Research for User Experience Design
            </h6>
            <p style={{ fontSize: 11 }} className="card-text">
              The Museum of Modern Art
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
