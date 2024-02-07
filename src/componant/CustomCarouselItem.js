import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Rectang from "../assest/Rectangle1.png";
import Eclips from "../assest/Ellipse1.png";
import Vect from "../assest/Vecte.png";

const CustomCarouselItem = ({
  imageSrc,
  title,
  description,
  description2,
  name,
  role,
}) => {
  return (
    <Carousel.Item>
      <img className="d-block w-100" src={imageSrc} alt="Carousel slide" />
      <Carousel.Caption>
        <h4>{title}</h4>
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
          {description}
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
          {description2}
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
            {name}
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
            {role}
          </p>
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default CustomCarouselItem;
