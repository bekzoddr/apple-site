import React, { memo } from "react";
import "./Store.css";
import StoreProducts from "../../storeProducts/StoreProducts";
import { FaChevronRight } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import CarouselStore from "../../carouselStore/Carousel";

function Store() {
  return (
    <div className="store">
      <div className="store__title">
        <h1>
          <span>Store.</span> The best way to buy the products you love.
        </h1>
        <div className="feedbacks">
          <div className="feedback one">
            <img
              className="fb"
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309_AV2?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1701194050335"
              alt=""
            />
            <div>
              <h4>Need shopping help?</h4>
              <a href="#">Ask a Specialist</a>
            </div>
          </div>
          <div className="feedback">
            <SiApple className="apple" />
            <div>
              <h4>Visit an Apple Store</h4>
              <a href="#">
                Find one near you <FaChevronRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      <StoreProducts />
      <h2 className="carousel__title">
        <span>The latest.</span> Take a look at what’s new, right now.
      </h2>
      <br />
      <br />
      <CarouselStore />
    </div>
  );
}

export default memo(Store);
