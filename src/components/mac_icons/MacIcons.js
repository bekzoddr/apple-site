import { React, memo } from "react";
import "./Macicon.css";
import { MACICONS } from "../../static/Index";

function MacIcons() {
  let macProducts = MACICONS?.map((el) => (
    <div key={el.id} className="mac__item">
      <img src={el.image} alt="" />
      <h4>{el.title}</h4>
    </div>
  ));

  return <div className="mac__icons">{macProducts}</div>;
}

export default memo(MacIcons);
