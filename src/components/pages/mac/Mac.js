import React, { memo } from "react";
import "./Mac.css";
import MacIcons from "../../mac_icons/MacIcons";
import video from "../../../assets/images/mac.gif";

function Mac() {
  return (
    <div className="mac">
      <MacIcons />
      <div className="mac__info">
        <p>
          Get 3% Daily Cash back with Apple Card. And pay for your new Mac over
          12 months, interest‑free when you choose to check out with Apple Card
          <br />
          Monthly Installments.◊ Learn more
        </p>
      </div>
      <div className="mac__title2">
        <h1>Mac</h1>
        <h3>
          If you can dream it, <br /> Mac can do it.
        </h3>
      </div>
      <div className="videoShow">
        <img src={video} alt="" className="video" />
      </div>
    </div>
  );
}

export default memo(Mac);
