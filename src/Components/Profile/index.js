import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import {
  ProfileSection,
  Flexable,
  SecProfile,
  SecSkills,
  InfoProfile,
  SkillsParagraph,
  Progress,
  Progs,
  InfoProgs,
  FillProg,
  Span,
  Wp,
  Seo,
  First,
  Last,
  TitleProfile,
  TitleSkills,
} from "./style.js";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setProfile(res.data.profile);
    });
  }, []);

  const profiles = profile.map((item) => {
    return (
      <Fragment key={item.id}>
        <InfoProfile>
          <First>name&nbsp;&nbsp;</First>
          <Last>{item.name}</Last>
        </InfoProfile>
        <InfoProfile>
          <First>birthday&nbsp;&nbsp;</First>
          <Last>{item.birthdat}</Last>
        </InfoProfile>
        <InfoProfile>
          <First>address&nbsp;&nbsp;</First>
          <Last>{item.address}</Last>
        </InfoProfile>
        <InfoProfile>
          <First>phone&nbsp;&nbsp;</First>
          <Last>{item.phone}</Last>
        </InfoProfile>
        <InfoProfile>
          <First>email&nbsp;&nbsp;</First>
          <Last>{item.email}</Last>
        </InfoProfile>
        <InfoProfile>
          <First>website&nbsp;&nbsp;</First>
          <Last>{item.website}</Last>
        </InfoProfile>
      </Fragment>
    );
  });

  const [skill, setSkill] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSkill(res.data.skills);
    });
  }, []);

  const skillsList = skill.map((itmeSkill) => {
    return (
      <Progs key={itmeSkill.id}>
        <InfoProgs>
          <span> {itmeSkill.name} </span>
          <span> {itmeSkill.percentage}</span>
        </InfoProgs>
        <FillProg>
          <Span test={itmeSkill.id}></Span>
        </FillProg>
      </Progs>
    );
  });

  return (
    <ProfileSection>
      <Flexable className="container ">
        <SecProfile>
          <TitleProfile>my profile</TitleProfile>
          {profiles}
        </SecProfile>
        <SecSkills>
          <TitleSkills>my skills</TitleSkills>
          <SkillsParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            debitis magnam architecto repellendus quia eos asperiores, labore
            voluptatem non ratione eaque voluptatum ipsum est dolorum ad.
            Facilis magni enim cum?
          </SkillsParagraph>
          <Progress>{skillsList}</Progress>
        </SecSkills>
      </Flexable>
    </ProfileSection>
  );
};

export default Profile;
