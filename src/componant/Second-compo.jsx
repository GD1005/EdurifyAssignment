import React from "react";
import firstimg from "../assest/EasyForm2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Second-compo.css";

const containerStyle = {
  padding: "3vw", // Responsive padding
  width: "50%", // Responsive width
  height: "auto", // Auto height to maintain aspect ratio
  // marginLeft: "auto", // Center horizontally
  // marginRight: "auto", // Center horizontally
};

const textContainerStyle = {
  fontFamily: "Poppins",
  fontSize: "2vw", // Responsive font size
  fontWeight: 300,
  textAlign: "left",
  margin: "2% 0", // Responsive margin from the top and bottom
  marginTop: "25% ",
};

const textContainer2Style = {
  fontFamily: "Poppins",
  fontSize: "1vw", // Responsive font size
  fontWeight: 400,
  textAlign: "left", // Center the text
  margin: "1% 0", // Responsive margin from the top and bottom
  color: "#5F6368",
  marginTop: "8% auto",
};

const imgStyle = {
  width: "90%", // Responsive width
  height: "auto", // Auto height to maintain aspect ratio
  marginLeft: "10% ", // Center horizontally
  marginRight: "auto", // Center horizontally
  marginTop: "15%", // Responsive margin from the top
};

function SecondCompo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 cont1" style={containerStyle}>
            <div>
              <p style={textContainerStyle}>
                To get started, you first need to create an Easy Form.
              </p>
              <p style={textContainer2Style}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={firstimg}
              alt="EasyForm"
              style={imgStyle}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondCompo;
