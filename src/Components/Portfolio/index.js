import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TitlePortfolio,
  PortfolioList,
  ListItem,
  Anchore,
  Boxes,
  Box,
  Img,
} from "./style.js";

const Portfolio = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.protfolio);
    });
  }, []);
  
  const imagesList = images.map((imgItem) => {
    return (
      <Box key={imgItem.id}>
        <Img src={imgItem.image} alt="" />
      </Box>
    );
  })
  

  return (
    <section className="portfolio">
      <TitlePortfolio>my portfolio</TitlePortfolio>
      <PortfolioList>
        <ListItem>
          <Anchore href="#">all</Anchore>
        </ListItem>
        <ListItem>
          <Anchore href="#">wordpress</Anchore>
        </ListItem>
        <ListItem>
          <Anchore href="#">design</Anchore>
        </ListItem>
        <ListItem>
          <Anchore href="#">front end</Anchore>
        </ListItem>
        <ListItem>
          <Anchore href="#">back end</Anchore>
        </ListItem>
      </PortfolioList>
      <Boxes>{imagesList}</Boxes>
    </section>
  );
};

export default Portfolio;
