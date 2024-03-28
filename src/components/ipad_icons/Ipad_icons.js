import React, { memo } from "react";
import "./ipad.icons.css";
import { IPADICONS } from "../../static/Index";
function Ipad_icons() {
  let ipadIcons = IPADICONS?.map((el) => (
    <div key={el.id} className="ipad_icon">
      <img className="ipad_icons" src={el.image} alt="icon" />
      <h5>
        {el.title} <br /> <span>{el.info}</span>
      </h5>
    </div>
  ));
  return <div className="Ipad__icons">{ipadIcons}</div>;
}

export default memo(Ipad_icons);
