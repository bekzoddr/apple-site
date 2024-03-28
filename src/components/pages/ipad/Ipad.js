import { React, memo } from "react";
import "./Ipad.css";
import Ipad_icons from "../../ipad_icons/Ipad_icons";
import image1 from "../../../assets/images/hero_ipad_pro.jpg";
function Ipad() {
  return (
    <div className="Ipad">
      <Ipad_icons />
      <div className="ipad__info">
        <p>
          Get 3% Daily Cash back with Apple Card. And pay for your new iPad over
          12 months, interest-free when you choose to check out with Apple Card
          Monthly Installments.*
          <br />
          <a style={{ color: "blue" }} href="#">
            Learn more
          </a>
        </p>
      </div>
      <div className="ipadban_info">
        <h1>iPad Pro</h1>
        <div className="more__info">
          <h3>Supercharged by</h3>
          <img
            src="https://www.apple.com/v/ipad/home/ci/images/overview/hero/m2_chip__buj2soxeo91e_large.png"
            alt="icon"
          />
        </div>
        <h2>From $799</h2>
        <br />
        <div className="ipadBtns">
          <a href="#">
            <button className="linkbtn__active">Buy</button>
          </a>
          <a href="#" style={{ color: "blue" }} className="linkbtn">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Ipad);
