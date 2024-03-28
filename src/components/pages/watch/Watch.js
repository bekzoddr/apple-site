import React, { memo } from "react";
import Watchicons from "../../watchIcons/Watchicons";
import logo from "../../../assets/images/logo_watch.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import "./Watch.css";
function Watch() {
  return (
    <div className="watch">
      <Watchicons />
      <div className="ipad__info">
        <p>
          Get 3 months of Apple Fitness+ when you buy any Apple Watch{" "}
          <a style={{ color: "blue" }} href="#">
            Shop Apple Watch
          </a>
        </p>
      </div>
      <div className="watchBanner">
        <div className="watch__Ban_Info">
          <img src={logo} alt="" />
          <h2>Smarter. Brighter. Mightier</h2>
          <h3>From $399</h3>
          <button className="buy">Buy</button>
          <div className="Wlinks">
            <a href="#">
              Learn more <FaChevronRight />
            </a>
            <a href="#">
              Watch the film <FaRegCirclePlay />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Watch);
