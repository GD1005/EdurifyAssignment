import React from "react";
import formImg from "../assest/formLastImg.png";
import "bootstrap/dist/css/bootstrap.min.css";

const imgStyle = {};

const mainDiv = {
  padding: "5vw",
  marginTop: "5%",
};

const containerStyle = {
  padding: "3vw",
};

const textStyle = {
  fontFamily: "Poppins",
  fontSize: "14px", // Responsive font size
  fontWeight: 400,
  width: "289px",
  height: "36px",
  marginLeft: " 70px",
  marginTop: "-45px",
};

const span1 = {
  fontFamily: "Poppins",
  fontSize: "32px", // Responsive font size
  fontWeight: 400,
  marginTop: "28%", // Responsive margin from the top
  width: "76px",
  height: "42px",
};

function SixthCompo() {
  return (
    <>
      <div className="container" style={mainDiv}>
        <div className="row">
          <div className="col-md-6">
            <img
              src={formImg}
              alt="LastImg"
              style={imgStyle}
              className="img-fluid"
            />
          </div>

          <div className="col-md-6" style={containerStyle}>
            <h3>Why Easyform</h3>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "22px", // Responsive font size
                fontWeight: 400,
                width: "350px",
              }}
            >
              Because after switching to us...
            </p>

            <span style={span1}>95%</span>
            <p style={textStyle}>
              {" "}
              of customers say they have a better brand experience
            </p>

            <span style={span1}>92%</span>
            <p style={textStyle}>
              of customers say they gather more data, more easily
            </p>

            <span style={span1}>82%</span>
            <p style={textStyle}>
              of customers say they reveal deeper insights from data
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SixthCompo;
