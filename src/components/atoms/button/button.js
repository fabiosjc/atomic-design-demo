import * as React from "react";
import { StyledButton } from "./styles";

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
