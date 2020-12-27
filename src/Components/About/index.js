import React from "react";
import { Creative, CreativeFlex, Title, TitleTwo, Paragraph } from "./style.js";

const About = () => {
  return (
    <Creative>
      <CreativeFlex className="container">
        <TitleTwo>this is me</TitleTwo>
        <Title>creative director</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aut
          porro quo optio et nemo! Veniam tenetur reprehenderit necessitatibus
          deleniti! Quasi corrupti ex reprehenderit dolorem consequuntur porro!
          Voluptatem, labore accusantium.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aut
          porro quo optio et nemo! Veniam tenetur reprehenderit necessitatibus
          deleniti! Quasi corrupti ex reprehenderit dolorem consequuntur porro!
          Voluptatem, labore accusantium.
        </Paragraph>
      </CreativeFlex>
    </Creative>
  );
};

export default About;
