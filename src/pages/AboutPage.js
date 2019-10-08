import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          I am a graphic designer / editor turned web developer. I studied Fine
          Arts at Rollins College with a focus in screen-printing and
          letterpress. Currently working at Letca Films, a Miami based
          production company and freelancing in Web Development to teach myself
          more advanced programming.
        </p>
        <p>
          I have experience with the entire Adobe Suite but focus in Premiere,
          After Effects, Photoshop, Illustrator, and Media Encoder. I am also
          comfortable with HTML, CSS, Javascript, React, JSX, NodeJS, Python,
          jQuery, and Wordpress.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
