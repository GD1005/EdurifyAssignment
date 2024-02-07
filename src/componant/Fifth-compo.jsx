import React from "react";
import Arrow1 from "../assest/Arrow.png";

const conatinerStyle = {
  marginTop: "10%",
};

const boxStyle = {
  width: "354px",
  hieght: "197px",
  borderRadius: "15px",
};

const Arrow = () => <img src={Arrow1} alt="Arrow" />;

function FifthCompo() {
  return (
    <>
      <div className="container" style={conatinerStyle}>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            width: "461px",
            textAlign: "center",
            color: "#1A032C",
            fontSize: "2vw",
            marginLeft: "30%",
          }}
        >
          You Can Do It All With A Form
        </p>

        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "14px",
            width: "512px",
            color: "#5F6368",
            // justifyContent: "center",
            // alignItems: "center",
            marginLeft: "26%",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <br />
        <br />
        <div className="row g-5">
          <div className="col-4">
            <div className="p-3 border bg-light " style={boxStyle}>
              <h4>Product</h4>
              <p>
                <Arrow /> Easy Form
              </p>
              <p>
                {" "}
                <Arrow /> Product Research
              </p>
              <p>
                {" "}
                <Arrow /> Product Feedback
              </p>
            </div>
          </div>

          <div className="col-4">
            <div className="p-3 border bg-light" style={boxStyle}>
              <h4>Creators</h4>
              <p>
                {" "}
                <Arrow /> Contact Details
              </p>
              <p>
                {" "}
                <Arrow /> Customer Feedback
              </p>
              <p>
                {" "}
                <Arrow /> Product Recommendation
              </p>
            </div>
          </div>

          <div className="col-4">
            <div className="p-3 border bg-light" style={boxStyle}>
              <h4> Response</h4>
              <p>
                {" "}
                <Arrow /> Request
              </p>
              <p>
                {" "}
                <Arrow /> Received
              </p>
              <p>
                <span> &nbsp;</span>
              </p>
            </div>{" "}
          </div>

          <div className="col-4">
            <div className="p-3 border bg-light" style={boxStyle}>
              <h4>Marketing</h4>
              <p>
                {" "}
                <Arrow /> Signups
              </p>
              <p>
                {" "}
                <Arrow /> Branding
              </p>
              <p>
                {" "}
                <Arrow /> Customer Feedback
              </p>
            </div>{" "}
          </div>

          <div className="col-4">
            <div className="p-3 border bg-light" style={boxStyle}>
              <h4>General Business </h4>
              <p>
                {" "}
                <Arrow /> Referral
              </p>
              <p>
                {" "}
                <Arrow /> Registration
              </p>
              <p>
                {" "}
                <Arrow /> Client Onboarding
              </p>
            </div>{" "}
          </div>

          <div className="col-4">
            <div className="p-3 border bg-light" style={boxStyle}>
              <h4>Customer Success</h4>
              <p>
                {" "}
                <Arrow /> FAQ Builder
              </p>
              <p>
                {" "}
                <Arrow /> Net Promoter Score
              </p>
              <p>
                {" "}
                <Arrow /> Customer Satisfaction
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default FifthCompo;
