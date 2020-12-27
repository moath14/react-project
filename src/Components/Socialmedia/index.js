import axios from "axios";
import React, { Component } from "react";
import { Social, Box, Icon, TextIcon } from "./style.js";

class Socialmedia extends Component {
  state = {
    social: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({
        social: res.data.social,
      });
    });
  }
  render() {
    const { social } = this.state;
    const socialList = social.map((socialItem) => {
      return (
        <Box key={socialItem.id} className={ socialItem.className }>
          <Icon>
            <i className={socialItem.icon}></i>
          </Icon>
          <TextIcon>
            <span>{socialItem.title}</span>
            <br />
            <span>{socialItem.body}</span>
          </TextIcon>
        </Box>
      );
    });
    return <Social>{ socialList }</Social>;
  }
}

export default Socialmedia;
