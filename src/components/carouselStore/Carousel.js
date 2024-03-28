import { React, memo } from "react";
import "./Carousel.css";
import { CAROUSEL } from "../../static/Index";
function CarouselStore() {
  let ProductCarousel = CAROUSEL?.map((el) => (
    <div
      style={{
        background: `url(${el.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      key={el.id}
      className="carousel__item"
    >
      <h5 style={{ color: el.color }} className="titles">
        {el.title}
      </h5>
      <h2 style={{ color: el.color }} className="describe">
        {el.describtion}
      </h2>
      <h4 style={{ color: el.color }} className="price">
        {el.price}
      </h4>
      ﻿
    </div>
  ));

  return <div className="carousel">{ProductCarousel}</div>;
}

export default memo(CarouselStore);
