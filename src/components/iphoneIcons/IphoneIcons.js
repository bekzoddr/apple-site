import { React, memo } from "react";
import "./IphoneIcons.css";
import { IPHONEICONS } from "../../static/Index";
function Iphone_icons() {
  let iphoneIcons = IPHONEICONS?.map((el) => (
    <div key={el.id} className="iphone_icon">
      <img className="iphone_icons" src={el.image} alt="icon" />
      <h5>
        {el.title} <br /> <span>{el.info}</span>
      </h5>
    </div>
  ));
  return <div className="Iphone__icons">{iphoneIcons}</div>;
}

export default memo(Iphone_icons);
