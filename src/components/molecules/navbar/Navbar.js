import React, { Component } from "react";
import { StyledMenu, MenuItem} from "./styles";
import Link from "../../atoms/link/link";

export default class Navbar extends Component {

  render() {
    const {menuItems = [{name: 'Menu Item', route: "#"}]} = this.props
    return (
      <StyledMenu >
        {menuItems.map(menuItem => {
          return <MenuItem><Link href={menuItem.route|| '#'}>{menuItem.name}</Link></MenuItem>;
        })}
      </StyledMenu>
    );
  }
}
