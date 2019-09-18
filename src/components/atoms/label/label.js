import React from "react";
import { StyledLabel } from "./styles";

const Label = props => {
  return <StyledLabel>{props.children}</StyledLabel>;
};

export default Label;
