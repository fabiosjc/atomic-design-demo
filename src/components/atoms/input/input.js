import React, { Fragment } from "react";
import styled, { css } from "styled-components";

const Input = ({ label, ...inputProps }) => {
  return (
    <Fragment>
      {label && <Label>{label}</Label>}
      <input {...inputProps} />
    </Fragment>
  );
};

const StyledInput = styled(Input)`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 8px;
  width: 100%;
  margin: 0;

  ${props =>
    props.disabled &&
    css`
      background: #f0f0f0;
    `};
`;

const Label = styled.label`
  display: inherit;
  padding: 6px 4px;
`;

export default StyledInput;
