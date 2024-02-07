import React from "react";

const containerStyle = {
  width: "100%", // Responsive width
  height: "400px", // Auto height to maintain aspect ratio
  backgroundColor: "#F7F7F7",
  marginTop: " 8%",
  padding: "5%",
};

const textConatinerH = {
  fontFamily: "Poppins",
  fontSize: "2vw",
  color: "#1A032C",
  width: "381px",
  Height: "98px",
  marginTop: " 8%",
  fontWeight: 400,
};

const textConatinerP = {
  color: "#00D78B",
  Width: "196px",
  Height: "24px",
  fontFamily: "Poppins",
  fontWeight: 500,
};

function ForthCompo() {
  return (
    <>
      <div className="container " style={containerStyle}>
        <div className="row">
          <div className="col-md-6">
            <p style={textConatinerH}>Works with your existing workflow</p>

            <p style={textConatinerP}>Browse 50+ integrations</p>
          </div>

          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
}

export default ForthCompo;
