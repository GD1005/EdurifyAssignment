import React from "react";
import Logo from "../assest/logo-white.png";
import Social from "../assest/social.png";

const section__padding = {
  padding: "4rem 4rem",
  display: "flex",
  flexDirection: "column",
};

const footer = {
  backgroundColor: "#2d2d32",
};

const footer_Links = {
  display: " flex",
  justifyContent: "space-between",
  alignItem: "flex-start",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  textAlign: "left",
  MarginBottom: "2rem",
};

const footer_Links_Div = {
  width: "150px",
  margin: "1 rem",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  color: "white",
};

const Link_Style = {
  color: " #DCDCDC ",
  textDecoration: "none",
};

const lorem1 = {
  width: "226px",
  hieght: "78px",
  marginTop: "25px",
};

const Socialstyle = {
  marginLeft: "1120px",
  marginTop: "-80px",
};

const Footer = () => {
  return (
    <>
      <div className="footer" style={footer}>
        <div className="sb__footer  " style={section__padding}>
          <div className="sb__footer-links" style={footer_Links}>
            <div className="sb__footer-links-div" style={footer_Links_Div}>
              <img src={Logo} alt="logo" />
              <p style={lorem1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="sb__footer-links_div">
              <h4 style={Link_Style}>Quick Links </h4>
              <a href="/home" style={Link_Style}></a>
              <p style={Link_Style}>Home </p>

              <a href="/products" style={Link_Style}></a>
              <p style={Link_Style}>Products </p>

              <a href="/responce" style={Link_Style}></a>
              <p style={Link_Style}>Responce </p>

              <a href="/blog" style={Link_Style}></a>
              <p style={Link_Style}>Blog </p>

              <a href="/content" style={Link_Style}></a>
              <p style={Link_Style}>Content </p>
            </div>

            <div className="sb__footer-links_div">
              <h4 style={Link_Style}>Company </h4>
              <a href="/about" style={Link_Style}></a>
              <p style={Link_Style}>About </p>

              <a href="/faq" style={Link_Style}></a>
              <p style={Link_Style}>FAQs </p>

              <a href="/terms" style={Link_Style}></a>
              <p style={Link_Style}>Terms & COndition </p>

              <a href="/policy" style={Link_Style}></a>
              <p style={Link_Style}>Privacy Policy </p>

              <a href="/content" style={Link_Style}></a>
              <p style={Link_Style}>Content </p>
            </div>

            <div className="sb__footer-links_div">
              <h4 style={Link_Style}>Contact Us </h4>
            </div>
          </div>

          <hr style={{ color: "#DCDCDC", width: "100%" }} />
          <div className="sb__footer-below">
            <div className="sb__ footer-copyright">
              <p style={Link_Style}>
                @{new Date().getFullYear()} Esayform | Product Of Edurify.
              </p>
              <img src={Social} alt="social" style={Socialstyle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
