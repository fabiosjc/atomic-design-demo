import React, { Component } from "react";
import { StyledHeader, HeaderLogo } from "./styles";
import Navbar from "../../molecules/navbar/Navbar";
import logo from "../../../res/img/logo.png";
import Logo from "../../atoms/logo/logo";

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
    const {height=25} = this.props
    return (
      <StyledHeader className={`${this.state.activeClass} header`}>
        <HeaderLogo>
          <Logo src={logo} height={height} alt="Rocketlab Logo"/>
        </HeaderLogo>
        <Navbar menuItems={this.props.menuItems} />
      </StyledHeader>
    );
  }
}
