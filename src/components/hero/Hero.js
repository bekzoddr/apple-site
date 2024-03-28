import { React, memo } from "react";
import "./hero.css";
function Hero({ title, describtion, bg, id, logoImg }) {
  const titleStyle = { color: id == 2 ? "white" : "black" };
  const bannerStyle =
    id == 1 ? { position: "relative", top: "250px" } : { bottom: "150px" };
  return (
    <div className="container">
      <div className="hero">
        <div style={{ backgroundImage: `url(${bg})` }} className="banner">
          <div style={bannerStyle} className="banner__info">
            <h1 style={titleStyle}>{title}</h1>
            <img className="herologo" src={logoImg} alt="" />
            <h3 style={titleStyle}>{describtion}</h3>
            <div className="links">
              <div className="links">
                <a href="#">
                  <button className="linkbtn">Learn more</button>
                </a>
                <a href="#">
                  <button className="linkbtn__active">Buy</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Hero);
