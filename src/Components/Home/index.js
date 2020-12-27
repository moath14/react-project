import React from "react";
import {
  Hero,
  FirstAddress,
  SecondAddress,
  Paragraph,
  Button,
  CenterAlign,
} from "./style.js";

const Home = () => {
  return (
    <Hero>
      <CenterAlign className="container">
        <FirstAddress>moath alnajjar</FirstAddress>
        <SecondAddress>creative design</SecondAddress>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          dignissimos, modi, qui quo ea ullam provident asperiores explicabo
          maxime
        </Paragraph>
        <Button>let's begin</Button>
      </CenterAlign>
    </Hero>
  );
};

export default Home;
