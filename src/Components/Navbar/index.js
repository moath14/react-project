import React from "react";
import {
  Header,
  NavbarLink,
  LogoText,
  Input,
  Label,
  Span,
  UlLink,
  Anchor,
} from "./style.js";

const Navbar = () => {
  return (
    <Header>
      <div className="container">
        <NavbarLink>
          <div className="logo">
            <LogoText>ultra profile</LogoText>
            <div className="nav">
              <Input type="checkbox" id="nav" />
              <Label htmlFor="nav">
                <Span></Span>
                <Span></Span>
                <Span></Span>
              </Label>
            </div>
          </div>
          <UlLink className="ul-link" id="links">
            <li className="link-item">
              <Anchor to="/">home</Anchor>
            </li>
            <li className="link-item">
              <Anchor to="work">work</Anchor>
            </li>
            <li className="link-item">
              <Anchor to="portfolio">portfolio</Anchor>
            </li>
            <li className="link-item">
              <Anchor to="resume">resume</Anchor>
            </li>
            <li className="link-item">
              <Anchor to="about">about</Anchor>
            </li>
            <li className="link-item">
              <Anchor to="contact">contact</Anchor>
            </li>
          </UlLink>
        </NavbarLink>
      </div>
    </Header>
  );
};

export default Navbar;
