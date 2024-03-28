import React, { memo } from "react";
import "./Vision.css";
import logo from "../../../assets/images/visionLogo.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
function Vision() {
  return (
    <div className="vision">
      <div className="vision_nav">
        <h2>Apple Vision Pro</h2>
        <div className="visionLinks">
          <h2>Overview</h2>
          <h2>Guided Tour</h2>
          <h2>Tech Specs</h2>
          <button className="book">Book a demo</button>
          <button className="buyy">Buy</button>
        </div>
      </div>
      <div className="visionBanner">
        <div className="vision__Ban_Info">
          <img className="visionImg" src={logo} alt="" />
          <a href="#">
            Watch the guided tour <FaChevronRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Vision);
