import React from "react";
import firstimg from "../assest/EasyForm2.png";
import "bootstrap/dist/css/bootstrap.min.css";

const containerStyle = {
  padding: "3vw", // Responsive padding
  width: "50%", // Responsive width
  height: "auto", // Auto height to maintain aspect ratio
};

const textContainerStyle = {
  fontFamily: "Poppins",
  fontSize: "2vw", // Responsive font size
  fontWeight: 300,
  marginTop: "28%", // Responsive margin from the top
  textAlign: "left",
};

const textContainer2Style = {
  fontFamily: "Poppins",
  fontSize: "1vw", // Responsive font size
  fontWeight: 400,
  marginTop: "1%", // Responsive margin from the top
  color: "#5F6368",
  textAlign: "left",
};

const imgStyle = {
  width: "90%", // Responsive width
  height: "auto", // Auto height to maintain aspect ratio
  marginLeft: "5%", // Responsive margin from the left
  marginTop: "20%", // Responsive margin from the top
};

function ThirdCompo() {
  return (
    <>
      <div className="container" >
        <div className="row">
          <div className="col-md-6">
            <img
              src={firstimg}
              alt="EasyForm"
              style={imgStyle}
              className="img-fluid"
            />
          </div>

          <div className="col-md-6" style={containerStyle}>
            <div>
              <p style={textContainerStyle}>
                Create an online form as easily as creating a document{" "}
              </p>
              <p style={textContainer2Style}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdCompo;
