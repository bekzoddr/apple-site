import { React, memo } from "react";
import { HEROS } from "../../../static/Index";
import Hero from "../../hero/Hero";
import Banners from "../../banners/Banners";
function Home() {
  let heros = HEROS?.map((el) => <Hero key={el.id} {...el} />);

  return (
    <div>
      {heros}
      <Banners />
    </div>
  );
}

export default memo(Home);
