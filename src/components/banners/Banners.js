import { React, memo } from "react";
import "./banners.css";
import { IoChevronForward } from "react-icons/io5";
import { BANNER } from "../../static/Index";
function Banners() {
  let banner = BANNER?.map((el) => (
    <div
      key={el.id}
      style={{ backgroundImage: `url(${el.bg})` }}
      className="plakat"
    >
      <div className="info">
        <div className="title">
          <img src={el.titleImg} alt="" />
          <h1 style={{ color: el.color }}> {el.title}</h1>
        </div>
        <p style={{ color: el.color }}>
          <span style={{ background: el.extraColor }}>{el.extraDes}</span>
          {el.describtion}
        </p>
        <div className="links">
          <div className="links">
            <a href="#">
              <button className="linkbtn">Learn more</button>
            </a>
            <a href="#">
              <button className="linkbtn__active">
                {el.id === 5 ? `${el.a}` : "Buy"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="banners">{banner}</div>
    </div>
  );
}

export default memo(Banners);
