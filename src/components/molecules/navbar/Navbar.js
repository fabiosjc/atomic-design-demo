import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { StyledMenu, MenuItem } from "./styles";

export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <StyledMenu>
        {this.props.children.map(menuItem => {
          return menuItem;
        })}
      </StyledMenu>
    );
  }
}
