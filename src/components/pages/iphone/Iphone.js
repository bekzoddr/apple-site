import React, { memo } from "react";
import Iphone_icons from "../../iphoneIcons/IphoneIcons";
import video from "../../../assets/images/iphone.gif";
function Iphone() {
  return (
    <div className="iphone">
      <Iphone_icons />
      <div className="mac__info Iphone__info">
        <p>
          Get $180–$630 in credit toward iPhone 15 or iPhone 15 Pro when you
          trade in iPhone 11 or higher.1 Shop iPhone
        </p>
      </div>
      <div className="mac__title2 iphoneTitle">
        <h1>Iphone</h1>
        <h3>Designed to be loved. </h3>
      </div>
      <img src={video} alt="" className="video" />
    </div>
  );
}

export default memo(Iphone);
