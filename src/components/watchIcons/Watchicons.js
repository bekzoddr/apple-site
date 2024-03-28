import React, { memo } from "react";
import { WATCHES } from "../../static/Index";
import "./watch.icons.css";

function Watchicons() {
  let watches = WATCHES?.map((el) => (
    <div key={el.id} className="watch_icon">
      <img src={el.image} alt="icon" />
      <h5>
        {el.title} <br /> <span>{el.info}</span>
      </h5>
    </div>
  ));
  return <div className="Watch__icons">{watches}</div>;
}

export default memo(Watchicons);
