import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousal {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
    </Carousal>
  );
};

export default ImgSlider;

const Carousal = styled(Slider)`
  margin-top: 20px;

  ui li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    object-fit: contain;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgba(0 0 0 / 69%) 0px 20px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
