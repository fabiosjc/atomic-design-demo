import React, { Component } from "react";
import { StyledHeader, HeaderLogo } from "./styles";
import Navbar from "../../molecules/navbar/Navbar";
import { MenuItem } from "../../molecules/navbar/styles";
import logo from "../../../res/img/logo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClass: ""
    };
  }

  handleScroll = () => {
    let activeClass = "normal";
    if (window.scrollY !== 0) {
      activeClass = "shadow";
    }
    this.setState({ activeClass });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <StyledHeader className={`${this.state.activeClass} header`}>
        <HeaderLogo>
          <img src={logo} alt="Rocketlab Logo" height="25" />
        </HeaderLogo>
        <Navbar>
          <MenuItem>Services</MenuItem>
          <MenuItem>Work</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Navbar>
      </StyledHeader>
    );
  }
}
