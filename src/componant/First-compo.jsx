import React from "react";
import firstimg from "../assest/home-img.png";
import signUP1 from "../assest/signUp2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./First-compo.css";

const FirstCompo = () => {
  const containerStyle = {
    borderRadius: "20px",
    marginTop: "50px",
    border: "1px solid black",
    width: "47%", // Responsive width
    height: "auto", // Auto height to maintain aspect ratio
    marginLeft: "3%", // Center horizontally
    padding: "5%",
  };

  const text1Style = {
    fontFamily: "Poppins",
    fontSize: "3vw", // Responsive font size
    fontWeight: 500,
    marginLeft: "3%", // Responsive margin from the left
    marginTop: "10%", // Responsive margin from the top
    width: "47%", // Responsive width
  };

  const signUpImgStyle = {
    width: "35%", // Responsive width
    height: "15%",
    marginTop: "15px",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 firstIMG" style={containerStyle}>
          <img src={firstimg} alt="HomeImg" className="img-fluid" />
        </div>
        <div className="col-md-6" style={text1Style}>
          <p className="text1">How To Embed Easy Forms On Your Site (Easy)</p>
          <img
            src={signUP1}
            alt="signUp"
            style={signUpImgStyle}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstCompo;
