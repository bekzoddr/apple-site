import React, { memo } from "react";
import "./StoreProducts.css";
import { PRODUCTS } from "../../static/Index";

function StoreProducts() {
  let products = PRODUCTS?.map((el) => (
    <div className="storeItem">
      <img src={el.image} alt="image" className="storeImg" />
      <h2 style={{ color: "black" }}>{el.title}</h2>
    </div>
  ));

  return <div className="storeProducts">{products}</div>;
}

export default memo(StoreProducts);
