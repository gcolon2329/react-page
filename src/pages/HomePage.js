import React from "react";

import Hero from "../components/Hero";
import Carosuel from "../components/Carosuel";

function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carosuel />
    </div>
  );
}

export default HomePage;
