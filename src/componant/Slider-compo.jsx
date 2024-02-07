import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Rectang from "../assest/Rectangle1.png";

import Eclips from "../assest/Ellipse1.png";
import Vect from "../assest/Vecte.png";
import CustomCarouselItem1 from "./CustomCarouselItem";

const Vect1 = () => <img src={Vect} alt="Vect1" />;

function SlideCompo() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={Rectang} alt="First slide" />
          <Carousel.Caption>
            <h4>Customers Love Easyform</h4>
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
                color: "#5F6368",
                lineHeight: "21px",
                width: "512px",
                textAlign: "center",
                marginLeft: "211px",
              }}
            >
              {" "}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src={Eclips} alt="Eclips1" />
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#5F6368",
                lineHeight: "22px",
                width: "761px ",
                marginLeft: " 100px",
              }}
            >
              <Vect1 />
              <Vect1 />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <Vect1 />
              <Vect1 />
              <br />
              <br />
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#00D78B",
                  lineHeight: "22px",
                }}
              >
                Gaurav Desai
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#1A032C",
                  lineHeight: "21px",
                }}
              >
                Business Developer
              </p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Rectang} alt="Second slide" />
          <Carousel.Caption>
            <h4>Customers Love Easyform</h4>
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
                color: "#5F6368",
                lineHeight: "21px",
                width: "512px",
                textAlign: "center",
                marginLeft: "211px",
              }}
            >
              {" "}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src={Eclips} alt="Eclips1" />
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#5F6368",
                lineHeight: "22px",
                width: "761px ",
                marginLeft: " 100px",
              }}
            >
              <Vect1 />
              <Vect1 />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <Vect1 />
              <Vect1 />
              <br />
              <br />
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#00D78B",
                  lineHeight: "22px",
                }}
              >
                Gaurav Desai
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#1A032C",
                  lineHeight: "21px",
                }}
              >
                Business Developer
              </p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Rectang} alt="Third slide" />
          <Carousel.Caption>
            <h4>Customers Love Easyform</h4>
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
                color: "#5F6368",
                lineHeight: "21px",
                width: "512px",
                textAlign: "center",
                marginLeft: "211px",
              }}
            >
              {" "}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src={Eclips} alt="Eclips1" />
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#5F6368",
                lineHeight: "22px",
                width: "761px ",
                marginLeft: " 100px",
              }}
            >
              <Vect1 />
              <Vect1 />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <Vect1 />
              <Vect1 />
              <br />
              <br />
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#00D78B",
                  lineHeight: "22px",
                }}
              >
                Gaurav Desai
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#1A032C",
                  lineHeight: "21px",
                }}
              >
                Business Developer
              </p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

// const SlideCompo = () => {
//   return (
//     <Carousel>
//       <CustomCarouselItem1
//         imageSrc={Rectang}
//         title="Customers Love Easyform"
//         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         name="Gaurav Desai"
//         role="Business Developer"
//       />

//       <CustomCarouselItem1
//         imageSrc={Rectang}
//         title="Karan M"
//         description="Lorem ipsum dolor sittempor incididunt ut labore et dolore magna aliqua"
//         name="John Doe"
//         role="Software Engineer"
//       />

//       <CustomCarouselItem1
//         imageSrc={Rectang}
//         title="Schin Sachin "
//         description="Lorem ipsum dolor sittempor incididunt ut labore et dolore magna aliqua"
//         description2="lorem dolor sittempor incididunt ut labore et do dolor sittempor incididunt ut labore et do"
//         name="Sachin "
//         role="Cricketer"
//       />
//     </Carousel>
//   );
// };

export default SlideCompo;
