import React from "react";
import deswu from "./Logo/deswu.jpg";
import crmens from "./Logo/crmens.jpg";

function Courses() {
  return (
    <div>
      <div className="container  mt-3">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div
            className="text-warning"
            style={{ fontSize: 13, fontWeight: "bold", fontFamily: "arial" }}
          >
            Course detail
          </div>
          <p style={{ fontFamily: "italic", fontWeight: "bold", fontSize: 50 }}>
            User Research for User Experience Design
          </p>
        </div>
      </div>
      {/* //////////// */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-7 col-sm-12">
            <div
              className="container-fluid bg-primary mb-3"
              style={{
                height: 500,
                backgroundImage: `url(${deswu})`,
                backgroundSize: "100% 100%",
                boxShadow: "0.5px 0.5px 1px black, -0.5px -0.5px 1px black",
              }}
            ></div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div
              className="container-fluid bg-opacity-50 border border-dark border-opacity-25  rounded"
              style={{
                height: 500,
                // marginTop: 167,
                paddingTop: 20,
                boxShadow: "0.5px 0.5px 1px gray, -0.5px -0.5px 1px gray",
              }}
            >
              <div className="d-flex " style={{ height: 20, marginLeft: 15 }}>
                <p className="fw-bold">Enrolled :</p>
                <p>&nbsp;1200 students</p>
              </div>
              <hr style={{}}></hr>
              <div className="d-flex " style={{ height: 20, marginLeft: 15 }}>
                <p className="fw-bold">Duration :</p>
                <p>&nbsp;2 hours</p>
              </div>
              <hr style={{}}></hr>
              <div className="d-flex " style={{ height: 20, marginLeft: 15 }}>
                <p className="fw-bold">Lectures :</p>
                <p>&nbsp;8</p>
              </div>
              <hr style={{}}></hr>
              <div className="d-flex " style={{ height: 20, marginLeft: 15 }}>
                <p className="fw-bold">Categories :</p>
                <p>&nbsp;Technology</p>
              </div>
              <hr style={{}}></hr>
              <div className="d-flex " style={{ height: 20, marginLeft: 15 }}>
                <p className="fw-bold">Level :</p>
                <p>&nbsp;Intermediate Level</p>
              </div>
              <hr style={{}}></hr>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <img
                  src={crmens}
                  alt="img"
                  style={{ width: 180, height: 130, marginLeft: 28 }}
                ></img>
              </div>

              <div className="text-center ">
                <p className="text-center" style={{ height: 6, marginTop: 17 }}>
                  {" "}
                  Contact a customer support at
                </p>
                <a
                  className="text-center text-primary fw-bold "
                  style={{ height: 6, textDecoration: "none" }}
                >
                  vctang@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="row ">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div>
              <h3 style={{ fontFamily: "italic", fontWeight: "bold" }}>
                Desicription
              </h3>
              <p>
                The online Master of Computer and Information Technology degree
                (MCIT Online) is an online masters degree in Computer Science
                tailored for non-Computer Science majors. Offered by the
                University of Pennsylvania, this new program brings the
                long-running, established on-campus MCIT degree online. The MCT
                Online program empowers students without computer science
                backgrounds to succeed in computing and technology fields. MCIT
                Online students come from diverse academic backgrounds ranging
                from business and history to chemistry and medicine.
              </p>
              <p>
                Computer science might not be in your past, but it will be in
                your future. Technology has an immense impact on our lives, and
                is creating fields and positions that didn't exist five years
                ago. Equipped with a competitive computer science degree, MCIT
                Online graduates will be uniquely positioned to fill roles in
                finance. healthcare, education, and government, as well as in
                the core software development industry. Exposure to real-world
                projects throughout the program will prepare students to utilize
                skills that positively impact society.
              </p>
            </div>
            <br></br>
            <br></br>

            <div>
              <h1
                style={{
                  marginBottom: 23,
                  fontFamily: "italic",
                  fontWeight: "bold",
                }}
              >
                What You'll Learn?
              </h1>

              <div className="row ">
                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                  <i
                    class="fa-solid fa-check text-success"
                    style={{ fontSize: 22 }}
                  ></i>
                </div>
                <div className="col-lg-11 col-md-11 col-sm-11 col-11">
                  <div className="container-fluid">
                    <p className="fw-bold d-inline">Ivy League Quality</p>
                    <p className="d-inline">
                      &nbsp;A first-of-its-kind program that offers an Ivy
                      League master's degree in Computer Science designed for
                      non-CS majors.
                    </p>
                  </div>
                </div>
              </div>
              <br></br>

              <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                  <i
                    class="fa-solid fa-check text-success"
                    style={{ fontSize: 22 }}
                  ></i>
                </div>
                <div className="col-lg-11 col-md-11 col-sm-11 col-11">
                  <div className="container-fluid">
                    <p className="fw-bold d-inline">
                      Built Around Your Schedule The coursework
                    </p>
                    <p className="d-inline">
                      &nbsp; is 100 percent online. You'll benefit from the same
                      high- quality instruction as on-campus students and
                      graduate with the same degree. The diploma does not
                      indicate whether the degree was earned online or
                      on-campus.
                    </p>
                  </div>
                </div>
              </div>
              <br></br>

              <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                  <i
                    class="fa-solid fa-check text-success"
                    style={{ fontSize: 22 }}
                  ></i>
                </div>
                <div className="col-lg-11 col-md-11 col-sm-11 col-11">
                  <div className="container-fluid">
                    <p className="fw-bold d-inline">
                      Accessible Pricing The cost of the MCIT Online degle
                    </p>
                    <p className="d-inline">
                      &nbsp; is significantly less than on-campus alternatives
                      and most online master's degrees in Computer Science.
                      Students pay $2,640 per course unit for a total of 10
                      courses units. Tuition and fees are posted as a guide and
                      may be subject to change.
                    </p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                  <i
                    class="fa-solid fa-check text-success"
                    style={{ fontSize: 22 }}
                  ></i>
                </div>
                <div className="col-lg-11 col-md-10 col-sm-11 col-11">
                  <div className="container-fluid">
                    <p className="fw-bold d-inline">
                      Try before you apply Penn Engineering
                    </p>
                    <p className="d-inline">
                      &nbsp; offers an online Specialization, Introduction to
                      Programming with Python and Java, on Coursera to help you
                      decide whether the MCIT Online program is the right fit
                      before you apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
