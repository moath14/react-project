import React, { Component } from "react";

import axios from "axios";

import {
  Cards,
  TitleWork,
  TitleCard,
  DescCard,
  Icon,
  CardCenter,
  Card,
  HrLine,
} from "./style.js";

class Work extends Component {
  state = {
    work: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({
        work: res.data.works,
      });
    });
  }
  render() {
    const { work } = this.state;
    const workList = work.map((workItem) => {
      return (
      <Card key={workItem.id}>
        <Icon className={workItem.icon_name}></Icon>
        <TitleCard>{workItem.title}</TitleCard>
        <HrLine />
        <DescCard>{workItem.body}</DescCard>
      </Card>        
      )
    });
    return (
      <Cards>
        <div className="container">
          <TitleWork>my work</TitleWork>
          <CardCenter>
            {workList}
          </CardCenter>
        </div>
      </Cards>
    );
  }
}

export default Work;
