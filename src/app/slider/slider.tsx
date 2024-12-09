import Image from "next/image";
import React from "react";
import { Slider } from "react-slick";


function SampleNextArrow(props: { className?: string; style?: React.CSSProperties; onClick?: React.MouseEventHandler<HTMLDivElement> }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className?: string; style?: React.CSSProperties; onClick?: React.MouseEventHandler<HTMLDivElement> }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
  <div key="1">
    <h3>
      <Image src={'/shoes1.png'} alt="shoes" width={200} height={200} />
    </h3>
  </div>
  <div key="2">
    <h3>2</h3>
  </div>
  <div key="3">
    <h3>3</h3>
  </div>
  <div key="4">
    <h3>4</h3>
  </div>
  <div key="5">
    <h3>5</h3>
  </div>
  <div key="6">
    <h3>6</h3>
  </div>
</Slider>
    </div>
  );
}

export default CustomArrows;