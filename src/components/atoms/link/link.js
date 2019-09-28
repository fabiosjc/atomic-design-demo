import * as React from "react";
import { StyledLink } from "./styles";

const Link = props => {
    return <StyledLink  {...props} >{props.children}</StyledLink>
};

export default Link;